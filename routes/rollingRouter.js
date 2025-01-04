const Router = require("express");
const router = new Router();

const rollingConroller = require("../conrollers/rollingConroller");

router.post("/", rollingConroller.create);
router.get("/", rollingConroller.getAll);
router.put("/:id", rollingConroller.put);
router.delete("/:id", rollingConroller.delete);

module.exports = router;
