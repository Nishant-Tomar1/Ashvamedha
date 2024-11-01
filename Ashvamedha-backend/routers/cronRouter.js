const router = require("express").Router();
const cronController = require("../controllers/cronController")

router.get("/testcron", cronController.testcron);

module.exports = router;