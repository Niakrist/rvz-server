const Router = require("express");
const router = new Router();

const brandConroller = require("../conrollers/brandConroller");

router.post("/", brandConroller.create);
router.get("/", brandConroller.getAll);
router.put("/:id", brandConroller.put);
router.delete("/:id", brandConroller.delete);
module.exports = router;
