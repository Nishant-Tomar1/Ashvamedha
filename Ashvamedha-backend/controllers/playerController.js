const player = require("../models/player");
const { success, error } = require("../utils/responseWrapper");
// player reegistration
const register = async (req, res) => {
  try {
    const { name, email, collegeName, phoneNo, gender, sportName } = req.body;
    if (!name || !email || !collegeName || !sportName || !gender || !phoneNo) {
      res.send(error(400, "All fields are required"));
    }
    const oldUser = await player.find({ email, name });
    if (oldUser) {
      res.send(error(409, "Player is already Registered"));
    }
    const playerInfo = await player.create({
      name,
      email,
      collegeName,
      phoneNo,
      gender,
      sportName,
    });
    return res.send(success(201, { playerInfo }));
  } catch (e) {
    console.log("this is the error from register side", e);
    return res.send(error(500, e.message));
  }
};
const playerList = async (req, res) => {
  try {
    const { sportName, collegeName } = req.body;
    const players = await player.findMany({ sportName }, { collegeName });
    res.send(success(201, { players }));
  } catch (e) {
    console.log("this is the error from playerList side", e);
    return res.send(error(500, e.message));
  }
};
module.exports = {
  register,
  playerList,
};
