const router = require('express').Router();
const {selectAll, selectOne, addOne, deleted,updated } = require("../controllers/item.controller");

router.get("/", selectAll);
router.get("/getOne", selectOne);
router.post("/addone",addOne )
router.delete("/delete/:id",deleted)
router.put('/update/:id',updated)
module.exports = router;
