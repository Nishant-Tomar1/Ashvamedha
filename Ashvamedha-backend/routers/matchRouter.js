const router = require("express").Router();
const matchController = require("../controllers/matchController");

router.post("/", matchController.updateMatchResult);

module.exports = router;
