const Router = require("express");
const router = new Router();

const rowConroller = require("../conrollers/rowConroller");

router.post("/", rowConroller.creatre);
router.get("/", rowConroller.getAll);
router.put("/", rowConroller.put);
router.delete("/", rowConroller.delete);

module.exports = router;
