const { success } = require("../utils/responseWrapper");

const testcron = ( _ ,res) => {
    return res.send(success(200, "Working properly"));
}

module.exports = {testcron}