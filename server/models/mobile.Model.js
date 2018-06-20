var app = require('../app');
const { mobileCollection } = require('../const').collections;

function MobileModel() {
    this.id = "";
    this.categoryId = "";
    this.name = "";
    this.description = "";
    this.price = "";
    this.image = "";
    this.cpu = "";
    this.camera = "";
    this.size = "";
    this.weight = "";
    this.display = "";
    this.battery = "";
    this.memory = "";
};

MobileModel.prototype.deserialize = function (mobileObj) {
    this.id = mobileObj.id;
    this.categoryId = mobileObj.categoryId;
    this.name = mobileObj.name
    this.description = mobileObj.description;
    this.price = mobileObj.price;
    this.image = mobileObj.image;
    this.cpu = mobileObj.cpu;
    this.camera = mobileObj.camera;
    this.size = mobileObj.size;
    this.weight = mobileObj.weight;
    this.display = mobileObj.display;
    this.battery = mobileObj.battery;
    this.memory = mobileObj.memory;
};

MobileModel.prototype.getAll = function () {
    return new Promise((resolve, reject) => {
        app.services.db.getAll(mobileCollection)
        .then(result => {
            return resolve(result);
        })
        .catch(err => {
            return reject(err);
        })
    });
};

const Mobile = {
    NewInstance: () => {}
};

((mobile_model) => {
    mobile_model.NewInstance = function () {
        return new MobileModel ();
    }

})(Mobile);

module.exports = Mobile;
