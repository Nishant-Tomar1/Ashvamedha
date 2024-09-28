const router = require("express").Router();
const playerController = require("../controllers/playerController");
router.post("/register", playerController.register);
router.post("/playerlist", playerController.playerList);
module.exports = router;
