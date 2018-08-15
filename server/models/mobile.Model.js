var app = require('../app');
const { mobileCollection } = require('../const').collections;

function MobileModel() {
  this.id = '';
  this.name = '';
  this.description = '';
  this.price = '';
  this.image = '';
  this.cpu = '';
  this.camera = '';
  this.size = '';
  this.weight = '';
  this.display = '';
  this.battery = '';
  this.memory = '';
}

MobileModel.prototype.getAll = function() {
  return new Promise((resolve, reject) => {
    app.services.db
      .getAll(mobileCollection)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

MobileModel.prototype.get = function(id) {
  return new Promise((resolve, reject) => {
    app.services.db
      .getById(mobileCollection, id)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

MobileModel.prototype.save = function(mobile) {
  return new Promise((resolve, reject) => {
    app.services.db
      .insert(mobileCollection, mobile)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

MobileModel.prototype.edit = function(id, data) {
  return new Promise((resolve, reject) => {
    let query = { _id: id };
    app.services.db
      .edit(mobileCollection, query, data)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

MobileModel.prototype.remove = function(id) {
  return new Promise((resolve, reject) => {
    let query = { id: id };
    app.services.db
      .remove(mobileCollection, query)
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

const Mobile = {
  NewInstance: () => {}
};

(mobile_model => {
  mobile_model.NewInstance = function() {
    return new MobileModel();
  };
})(Mobile);

module.exports = Mobile;
