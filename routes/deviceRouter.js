const Router = require("express");
const router = new Router();
const deviceConroller = require("../conrollers/deviceConroller");

router.post("/", deviceConroller.create);
router.get("/", deviceConroller.getAll);
router.get("/:id", deviceConroller.getItem);

module.exports = router;
