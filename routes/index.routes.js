const { Router } = require("express");

const router = Router();

const otpRouter = require("./otp.routes");

router.use("/otp", otpRouter);

module.exports = router;
