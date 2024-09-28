const router = require("express").Router();
const collegeController = require("../controllers/collegeController");
router.post("/", collegeController.collegePointTable);
router.post("/score", collegeController.totalScore);
module.exports = router;
