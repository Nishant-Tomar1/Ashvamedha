const router = require("express").Router();
const adminController = require("../controllers/adminController");
router.post("/signup", adminController.signup);
router.post("/login", adminController.login);
router.get("/refresh", adminController.refreshAccessToken);
module.exports = router;
