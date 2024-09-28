const liveScore = require("../models/liveScore");
const { success, error } = require("../utils/responseWrapper");
const setLiveScore = async (req, res) => {
  try {
    const {
      college1Name,
      college1Score,
      college2Name,
      college2Score,
      matchName,
      category,
      sportName,
      editedBy,
      set,
      location,
      college1Logo,
      college2Logo,
    } = req.body;
    if (
      !matchName ||
      !college1Name ||
      !college2Name ||
      !college1Score ||
      !sportName ||
      !college2Score ||
      !editedBy ||
      !category ||
      !set ||
      !location ||
      !college1Logo ||
      !college2Logo
    ) {
      return res.send(error(400, "All fields are required"));
    }
    const livescore = await liveScore.create({
      college1Name,
      college1Logo,
      college1Score,
      college2Name,
      college2Score,
      college2Logo,
      matchName,
      category,
      sportName,
      editedBy,
      set,
      location,
    });
    return res.send(success(201, `live score set ${livescore}`));
  } catch (e) {
    console.log("this is the error from liveScore side", e);
    return res.send(error(500, e.message));
  }
};
const updateLiveScore = async (req, res) => {
  try {
    const { matchname, sportname, set, college1Score, college2Score } =
      req.body;
    if (!matchname || !sportname) {
      return res.send(
        error(
          400,
          "match name and sports name is required required for update score"
        )
      );
    }
    const match = await liveScore.find({
      matchName: matchname,
      sportName: sportname,
    });
    if (!match) {
      return res.send(404, "match score not found, set the score");
    }
    match.forEach(async (match) => {
      match.college1Score = college1Score;
      match.college2Score = college2Score;
      match.set = set;
      await match.save();
    });
    return res.send(success(200, `score updated ${match}`));
  } catch (e) {
    console.log("this is the error from updateLiveScore side", e);
    return res.send(error(500, e.message));
  }
};
const getLiveScore = async (req, res) => {
  try {
    const { sportname } = req.body;
    if (!sportname) {
      return res.send(error(400, "all fields are reqired"));
    }
    const liveScoreInfo = await liveScore.find({
      sportName: sportname,
    });
    if (!liveScoreInfo) {
      return res.send(404, "match score not found");
    }
    return res.send(success(200, { liveScoreInfo }));
  } catch (e) {
    console.log("this is the error from updateLiveScore side", e);
    return res.send(error(500, e.message));
  }
};
const deleteLiveScore = async (req, res) => {
  try {
    const { matchId } = req.body;
    if (!matchId) {
      return res.send(error(400, "match id required for to delete score"));
    }
    const match = await liveScore.findById({ _id: matchId });
    if (!match) {
      return res.send(404, "match score not found, set the score first");
    }
    await liveScore.deleteOne({ _id: matchId });
    return res.send(
      success(200, `live score ended plz update the overall point table`)
    );
  } catch (e) {
    console.log("this is the error from updateLiveScore side", e);
    return res.send(error(500, e.message));
  }
};
module.exports = {
  setLiveScore,
  updateLiveScore,
  deleteLiveScore,
  getLiveScore,
};
