const Sports = require("../models/sports");
const { success, error } = require("../utils/responseWrapper");

const updateMatchResult = async (req, res) => {
  // point table in this requested sport
  try {
    // like collegeController only just add sportName also for filter
    const {
      matchName,
      college1Name,
      college2Name,
      point,
      editedBy,
      collegeWon,
      sportName,
      category,
    } = req.body;
    if (
      !matchName ||
      !college1Name ||
      !college2Name ||
      !point ||
      !collegeWon ||
      !editedBy ||
      !sportName ||
      !category
    ) {
      return res.send(error(400, "All fields are required"));
    }
    const matchname = await Sports.find({ matchName });
    if (
      matchname[0]?.category === category &&
      matchname[0]?.matchName === matchName &&
      matchname[0]?.sportName === sportName
    ) {
      return res.send(error(409, "Match results are already uploaded"));
    }
    const matchResult = await Sports.create({
      matchName,
      college1Name,
      college2Name,
      point,
      sportName,
      collegeWon,
      editedBy,
      category,
    });
    return res.send(success(201, `match result uploaded: ${matchResult}`));
  } catch (e) {
    console.log("this is the error from matchController side", e);
    // return res.send(error(500, e.message));
  }
};
module.exports = {
  updateMatchResult,
};
