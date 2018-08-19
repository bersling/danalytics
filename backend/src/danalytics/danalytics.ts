const MongoClient = require('mongodb').MongoClient;
const secret = require('./secret.json');

export function getAllLogs() {
    // Use connect method to connect to the server
    MongoClient.connect(secret.url, function (err, db) {
        console.log('Connected successfully to danalytics db');
        const col = db.collection('danalogs');
        const allCursor = col.find({});
        allCursor.forEach((elt) => {
            console.log(elt);
        });
        db.close();
    });
}
