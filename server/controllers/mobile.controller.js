var app = require('../app');

let getAll = async () => {
  try {
    let mobileModel = app.models.mobile.NewInstance();
    let allMobiles = await mobileModel.getAll();
    return {
      code: 200,
      status: 'Success',
      message: 'All Available Mobiles',
      success: true,
      err: null,
      data: allMobiles
    };
  } catch (err) {
    return {
      code: 500,
      status: 'Request Failed',
      message: 'Failed to fetch the list of available mobiles',
      success: false,
      err: typeof err == 'string' ? err : err.message
    };
  }
};

let get = async id => {
  try {
    let mobileModel = app.models.mobile.NewInstance();
    let mobile = await mobileModel.get(id);
    return {
      code: 200,
      status: 'Success',
      message: 'Mobile with given id',
      success: true,
      err: null,
      data: mobile
    };
  } catch (err) {
    return {
      code: 500,
      status: 'Request Failed',
      message: 'Failed to fetch the mobile',
      success: false,
      err: typeof err == 'string' ? err : err.message
    };
  }
};

let add = async mobile => {
  try {
    let mobileModel = app.models.mobile.NewInstance();
    let result = await mobileModel.save(mobile);
    return {
      code: 200,
      status: 'Success',
      message: 'Successfully added new mobile',
      success: true,
      err: null,
      data: result
    };
  } catch (err) {
    return {
      code: 500,
      status: 'Request Failed',
      message: 'Failed to add new Mobile',
      success: false,
      err: typeof err == 'string' ? err : err.message
    };
  }
};

let edit = async (id, data) => {
  try {
    let mobileModel = app.models.mobile.NewInstance();
    let result = await mobileModel.edit(id, data);
    return {
      code: 200,
      status: 'Success',
      message: 'Successfully editted mobile',
      success: true,
      err: null,
      data: result
    };
  } catch (err) {
    return {
      code: 500,
      status: 'Request Failed',
      message: 'Failed to edit mobile',
      success: false,
      err: typeof err == 'string' ? err : err.message
    };
  }
};

let remove = async id => {
  try {
    let mobileModel = app.models.mobile.NewInstance();
    let result = await mobileModel.remove(id);
    return {
      code: 200,
      status: 'Success',
      message: 'Successfully deleted mobile',
      success: true,
      err: null,
      data: result
    };
  } catch (err) {
    return {
      code: 500,
      status: 'Request Failed',
      message: 'Failed to delete Mobile',
      success: false,
      err: typeof err == 'string' ? err : err.message
    };
  }
};

module.exports = {
  getAll,
  get,
  add,
  edit,
  remove
};
