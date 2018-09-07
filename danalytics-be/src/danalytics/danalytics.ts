import {MongoClient} from 'mongodb';
const secret = require('./secret.json');

export function getAllErrors() {
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
                const stream = col.find({$and: [isError, isProd]});

                const errors = [];

                stream.once('end', function() {
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
    })
}

enum GtmEvent {
    JS_ERROR = 'JS_ERROR'
}
