const router = require("express").Router();
const adminController = require("../controllers/adminController");
const requireUser = require("../middlewares/requireUser");
router.post("/signup", adminController.signup);
router.post("/login", adminController.login);
router.get("/refresh", requireUser , adminController.refreshAccessToken);
router.get("/verify", requireUser , adminController.verifyToken);

module.exports = router;
