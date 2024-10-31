const Sports = require("../models/sports");
const { success, error } = require("../utils/responseWrapper");
const { mapMatchResultOutput } = require("../utils/utils");

const collegePointTable = async (req, res) => {
  // point table in this requested by a particular college
  try {
    // this api will show total match won by a college
    const { collegeName } = req.body;
    const collegeInfo = await Sports.find({ collegeWon: { $eq: collegeName } });
    // console.log(collegeInfo);
    const modifiedResult = collegeInfo.map((item) =>
      mapMatchResultOutput(item)
    );
    res.send(success(201, { modifiedResult }));
  } catch (e) {
    console.log("this is the error from register side", e);
    return res.send(error(500, e.message));
  }
};

const totalScore = async (req, res) => {
  try {
    const { collegeName } = req.body;
    const collegeInfo = await Sports.find({ collegeWon: { $eq: collegeName } });
    // console.log(collegeInfo);
    let score = 0;
    collegeInfo.forEach((element) => (score = score + element.point));
    return res.send(success(201, [score, collegeName]));
  } catch (e) {
    console.log("this is the error from register side", e);
    return res.send(error(500, e.message));
  }
};

module.exports = {
  collegePointTable,
  totalScore,
};
