var app = require('./app');

(async function() {
  try {
    app.services = {};
    app.models = {};
    app.services.db = require('./services/db');
    await app.services.db.connect();

    app.models.mobile = require('./models/mobile.Model');
    app.models.admin = require('./models/admin.model');
  } catch (err) {
    console.log(err);
  }
})();
