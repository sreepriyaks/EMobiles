var app = require('../app');
const { adminCollection } = require('../const').collections;

function AdminModel() {
  this.username = '';
  this.password = '';
}

AdminModel.prototype.create = data => {
  return new Promise((resolve, reject) => {
    try {
      app.services.db
        .insert(adminCollection, data)
        .then(result => {
          return resolve(result);
        })
        .catch(err => {
          return reject(err);
        });
    } catch (err) {
      return reject(err);
    }
  });
};

AdminModel.prototype.getByUsername = username => {
  return new Promise((resolve, reject) => {
    try {
      app.services.db
        .search(adminCollection, { username: username })
        .then(result => {
          return resolve(result);
        })
        .catch(err => {
          return reject(err);
        });
    } catch (err) {
      return reject(err);
    }
  });
};

const Admin = {
  NewInstance: () => {}
};

(admin_model => {
  admin_model.NewInstance = function() {
    return new AdminModel();
  };
})(Admin);

module.exports = Admin;
