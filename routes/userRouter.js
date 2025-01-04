const Router = require("express");
const router = new Router();

const userConroller = require("../conrollers/userConroller");

router.post("/registration", userConroller.registration);
router.post("/login", userConroller.login);
router.get("/auth", userConroller.check);

module.exports = router;
