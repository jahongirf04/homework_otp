const { Router } = require("express");
const {
  newOtp,
  verifyOTP,
  login,
} = require("../controllers/otp.controller");

const router = Router();

router.post("/newotp", newOtp);

router.post("/verify-otp", verifyOTP);

router.post("/login", login);

module.exports = router;
