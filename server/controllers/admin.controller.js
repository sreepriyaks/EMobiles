var app = require('../app');
var authController = require('./auth.controller');

let create = async data => {
  try {
    data.password = authController.encryptPassword(data.password);
    let adminModel = app.models.admin.NewInstance();

    let result = await adminModel.create(data);
    return {
      code: 200,
      status: 'Success',
      message: 'Successfully created new admin user',
      success: true,
      err: null,
      data: result
    };
  } catch (err) {
    return {
      code: 500,
      status: 'Request Failed',
      message: 'Failed to create new admin user',
      success: false,
      err: typeof err == 'string' ? err : err.message
    };
  }
};

let login = async data => {
  try {
    let adminModel = app.models.admin.NewInstance();
    let JWT = null;
    result = await adminModel.getByUsername(data.username);

    if (!result.length) {
      return {
        code: 200,
        status: 'Request Failed',
        message: 'Failed to Login. Invalid credentials',
        success: true,
        err: null
      };
    }

    if (!authController.comparePassword(data.password, result[0].password)) {
      return {
        code: 200,
        status: 'Request Failed',
        message: 'Failed to Login. Invalid credentials',
        success: true,
        err: null
      };
    }

    JWT = authController.createToken(data);
    return {
      code: 200,
      status: 'Success',
      message: 'Successfully Logged In',
      success: true,
      err: null,
      data: JWT
    };
  } catch (err) {
    return {
      code: 200,
      status: 'Request Failed',
      message: 'Failed to Login. Invalid credentials',
      success: false,
      err: typeof err == 'string' ? err : err.message
    };
  }
};

module.exports = {
  create,
  login
};
