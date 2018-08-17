const mongoUrl = require('../config')().mongoUrl;
const MongoClient = require('mongodb').MongoClient;

const database = {
  connect: () => {},
  isConnected: () => {},
  getAll: collectionName => {}
};

(db => {
  db.connect = () => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(
        mongoUrl,
        function(err, dbInstance) {
          if (err) {
            return reject(
              new Error([err.name + ' : ' + err.message], {
                message: `Connection to MongoDB at ${mongoUrl}`
              })
            );
          } else {
            db = dbInstance;
            resolve(`Mongo connected at ${mongoUrl}`);
          }
        }
      );
    });
  };

  db.isConnected = () => {
    if (db) {
      return true;
    } else {
      return false;
    }
  };

  db.getAll = collectionName => {
    return new Promise((resolve, reject) => {
      let collection = db.collection(collectionName);
      collection.find({}).toArray((err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  };

  db.getById = (collectionName, id) => {
    return new Promise((resolve, reject) => {
      let collection = db.collection(collectionName);
      collection.find({ _id: id }).toArray((err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  };

  db.insert = (collectionName, data) => {
    return new Promise((resolve, reject) => {
      let collection = db.collection(collectionName);

      collection.insert(data, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  };

  db.edit = (collectionName, query, data) => {
    return new Promise((resolve, reject) => {
      let collection = db.collection(collectionName);
      collection.update(query, data, { upsert: true }, (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
  };

  db.remove = (collectionName, query) => {
    return new Promise((resolve, reject) => {
      let collection = db.collection(collectionName);
      collection.deleteOne(query, (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
  };

  db.search = (collectionName, query) => {
    return new Promise((resolve, reject) => {
      let collection = db.collection(collectionName);
      collection.find(query).toArray((err, result) => {
        if (err) {
          return reject(err);
        }

        return resolve(result);
      });
    });
  };
})(database);

module.exports = database;
