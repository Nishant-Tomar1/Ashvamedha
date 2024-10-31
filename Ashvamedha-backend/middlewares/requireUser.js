// now we will work with headers part of req
const admin = require("../models/admin");
const { error } = require("../utils/responseWrapper");
const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  const accessToken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer","") 
  if (!accessToken) {
    return res.send(error(401, "Authorization header is required"));
  }
  
  try {
    const decoded = jwt.verify(accessToken, process.env.ACCESS_KEY);
    
    // req.user=user isse pura ka pura user aa jata
    const user = await admin.findById(decoded._id);
    if (!user) {
      return res.send(error(404, "user not found"));
    }
    req.user = user;
    
    next();
  } catch (e) {
    console.log("this error is from requireUser side", e);
    return res.send(error(401, "Invalid access key"));
  }
};
