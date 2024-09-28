const router = require("express").Router();
const scoreController = require("../controllers/scoreController");
router.post("/getlivescore", scoreController.getLiveScore);
router.post("/setlivescore", scoreController.setLiveScore);
router.put("/updatelivescore", scoreController.updateLiveScore);
router.delete("/deletelivescore", scoreController.deleteLiveScore);
module.exports = router;
