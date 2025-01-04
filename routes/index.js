const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const deviceRouter = require("./deviceRouter");
const brandRouter = require("./brandRouter");
const loadRouter = require("./loadRouter");
const rollingRouter = require("./rollingRouter");
const rowRouter = require("./rowRouter");

router.use("/user", userRouter);
router.use("/device", deviceRouter);
router.use("/brand", brandRouter);
router.use("/load", loadRouter);
router.use("/rolling", rollingRouter);
router.use("/row", rowRouter);

module.exports = router;
