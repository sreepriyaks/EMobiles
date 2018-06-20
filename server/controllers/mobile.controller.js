var app = require('../app');

let getAll = async () => {
    try {

        let mobileModel = app.models.mobile.NewInstance();
        let allMobiles = await mobileModel.getAll();
        return {
            code: 200,
            status: "Success",
            message: "All Available Mobiles",
            success: true,
            err: null,
            data: allMobiles
        };

    } catch (err) {
        return {
            code: 500,
            status: "Request Failed",
            message: "Failed to fetch the list of available mobiles",
            success: false,
            err: typeof err == "string" ? err : err.message
        };
    }
};

module.exports = {
    getAll
}

