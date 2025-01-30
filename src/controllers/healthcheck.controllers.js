// apiresponse = require('../utils/apiresponse');
import { apiresponse } from "../utils/apiresponse.js"
import { asynchandler } from "../utils/asynchandler.js"   

const healthcheck = asynchandler(async (req, res) => {
    return res
    .status(200)
    .json(new apiresponse(200, "ok", "heakthcheck passed..."))
})

export {healthcheck}