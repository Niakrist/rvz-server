const Router = require("express");
const router = new Router();

const loadConroller = require("../conrollers/loadConroller");

router.post("/", loadConroller.create);
router.get("/", loadConroller.getAll);
router.put("/:id", loadConroller.put);
router.delete("/:id", loadConroller.delete);

module.exports = router;
