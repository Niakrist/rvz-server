const Router = require("express");
const router = new Router();
const deviceConroller = require("../conrollers/deviceConroller");

router.post("/", deviceConroller.create);
router.get("/", deviceConroller.getAll);
router.get("/:url", deviceConroller.getItem);
router.delete("/:id", deviceConroller.removeDevice);

module.exports = router;
