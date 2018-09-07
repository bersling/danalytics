import {MongoClient} from 'mongodb';

import secret from './secret.json';

export interface ErrorFilters {
  task?: string,
  start?: Date,
  end?: Date
}

function nowMinusNHours(numberOfHours: number) {
  const d = new Date();
  d.setHours(d.getHours() - numberOfHours);
  return d;
}

export function getAllErrors(filters: ErrorFilters) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(secret.url, function (err, client) {
      if (err) {
        reject(err);
      } else {

        console.log('Connected successfully to danalytics db');
        const db = client.db('danalytics');
        const col = db.collection('danalogs');
        const isError = {'data.event': 'JS_ERROR'};
        const isProd = {'data.pageHostname': 'lernnavi.taskbase.com'};
        const query: any[] = [isError, isProd];

        const start = filters.start != null ? new Date(filters.start) : nowMinusNHours(24);
        const end = filters.end != null ? new Date(filters.end) : new Date();
        const isBetween = {
          timestamp: {
            $gte: start.getTime(),
            $lt: end.getTime()
          }
        };
        query.push(isBetween);

        if (filters.task) {
          query.push({
            'data.appState.task': filters.task
          })
        }
        const stream = col.find({$and: query});

        const errors = [];

        stream.once('end', function () {
          client.close();
          resolve(errors);
        });

        stream.on('data', function (resp) {
          const eventData = resp.data.eventData;
          if (eventData) {
            console.log(resp);
            errors.push(resp);
          } else {
            // this log entry doesn't have the right format for this query...
          }
        });
      }

    });
  });
}

enum GtmEvent {
  JS_ERROR = 'JS_ERROR'
}
