const mongoUrl = require('../config')().mongoUrl;
const MongoClient = require('mongodb').MongoClient;

const database = {
    connect: () => { },
    isConnected: () => { },
    getAll: (collectionName) => { }
};

((db) => {
    db.connect = () => {

        return new Promise((resolve, reject) => {

            MongoClient.connect(mongoUrl, function (err, dbInstance) {
                if (err) {
                    return reject(new Error([err.name + " : " + err.message], {
                        message: `Connection to MongoDB at ${mongoUrl}`
                    }
                    ))
                } else {
                    db = dbInstance;
                    resolve(`Mongo connected at ${mongoUrl}`);
                }
            })

        });
    };

    db.isConnected = () => {
        if (db) {
            return true;
        } else {
            return false;
        }
    };

    db.getAll = (collectionName) => {
        return new Promise((resolve, reject) => {
            let collection = db.collection(collectionName);
            collection.find({}).toArray((err, result) => {
                if (err) return reject(err);
                return resolve(result);
            });
        });
    };

})(database);

module.exports = database;
