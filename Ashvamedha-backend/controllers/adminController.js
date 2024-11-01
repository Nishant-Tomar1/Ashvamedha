const admin = require("../models/admin");
const { success, error } = require("../utils/responseWrapper");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.send(error(400, "Plz enter Email /Password "));
    }

    const sport = email.split(".")[0].toLowerCase();
    const sportList = ["football","badminton","chess","tabletennis","gym","bgmi","volleyball","lawntennis","basketball","athletics"];
    if (!sportList.includes(sport)){
      return res.send(error(409,"Invalid Email format!!"));
    }
    const oldUser = await admin.findOne({ email });
    if (oldUser) {
      return res.send(error(409, "admin already exits"));
    }
    const hashPassword = await bcrypt.hash(password, 10);
    await admin.create({
      name : name.toLowerCase(),
      email : email.toLowerCase(),
      password: hashPassword,
      sport : sport
    });
    return res.send(success(201, "admin created successfully"));
  } catch (e) {
    console.log("this is the error from signup side", e); 
    // return res.send(error(500, e.message));
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send(error(400, "Plz enter email id/password"));
    }

    const sport = email.split(".")[0].toLowerCase();
    const sportList = ["football","badminton","chess","tabletennis","gym","bgmi","volleyball","lawntennis","basketball","athletics"];

    if (!sportList.includes(sport)){
      return res.send(error(409,"Email format is invalid!!"));
      return;
    }

    const user = await admin.findOne({ email }).select("+password");
    // console.log(user);
    
    if (!user) {
      return res.send(error(404, "user not registered"));
      return;
    }

    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      return res.send(error(403, "Incorrect password"));
      return;
    }
    const accessToken =  generateAccessToken({ _id: user._id, sport : user.sport });
    const refreshToken = generateRefreshToken({ _id: user._id, sport : user.sport });
    
    return res.send(success(200, { accessToken , refreshToken, sport}));
  } catch (e) {
    console.log("this is the error from login side", e);
  }
}; 

const verifyToken = async(req, res) => {
  if (req.user.sport){
    // console.log(req.user);
    
    return res
    .send(success(200, req.user)); 
  }
}

const refreshAccessToken = async (req, res) => { 
  const cookies = req.cookies;
  
  if (!cookies.refreshToken ) {
    return res.send(error(401, "Refresh token in cookie is required"));
  }
  const refreshToken = cookies.refreshToken;
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_KEY);
    // console.log(decoded);

    const accessToken = generateAccessToken({ _id: decoded._id, sport : decoded.sport });

    const options = {
      // httpOnly: true,
      secure:true
    }

    return res
    .cookie("accessToken",accessToken, options)
    .send(success(201, { accessToken }));

  } catch (e) {
    console.log("this error is from refreshAccessToken side", e);
    // return res.send(error(500, e.message));
  }
};


const generateRefreshToken = (data) => {
  try {
    const token = jwt.sign(data, process.env.REFRESH_KEY, {
      expiresIn: "1y",
    });
    return token;
  } catch (e) {
    console.log(
      "this error is from refresh token generating function side ",
      e
    );
  }
};
const generateAccessToken = (data) => {
  try {
    const token = jwt.sign(data, process.env.ACCESS_KEY, {
      expiresIn: "1d",
    });
    return token;
  } catch (e) {
    console.log("this error is from access token generating function side ", e);
  }
};
module.exports = {
  signup,
  login,
  refreshAccessToken,
  verifyToken
};
