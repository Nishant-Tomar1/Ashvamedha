const admin = require("../models/admin");
const { success, error } = require("../utils/responseWrapper");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.send(error(400, "Plz enter Email /Password "));
    }
    const oldUser = await admin.findOne({ email });
    if (oldUser) {
      res.send(error(409, "admin already exits"));
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await admin.create({
      name,
      email,
      password: hashPassword,
    });
    return res.send(success(201, "admin created successfully"));
  } catch (e) {
    console.log("this is the error from signup side", e);
    return res.send(error(500, e.message));
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send(error(400, "Plz enter email id/password"));
    }
    const user = await admin.findOne({ email }).select("+password");
    if (!user) {
      return res.send(error(404, "user not registered"));
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.send(error(403, "Incorrect password"));
    }
    const accessToken = generateAccessToken({ _id: user._id });
    const refreshToken = generateRefreshToken({ _id: user._id });
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
    });
    return res.send(success(200, { accessToken }));
  } catch (e) {
    console.log("this is the error from login side", e);
    return res.send(error(500, e.message));
  }
};
const refreshAccessToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies.jwt) {
    return res.send(error(401, "Refresh token in cookie is required"));
  }
  const refreshToken = cookies.jwt;
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_KEY);
    const _id = decoded._id;
    const accessToken = generateAccessToken({ _id });
    return res.send(success(201, { accessToken }));
  } catch (e) {
    console.log("this error is from refreshAccessToken side", e);
    return res.send(error(500, e.message));
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
};
