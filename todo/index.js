const fetchRouter = require("router");
var router = fetchRouter();

router.post("/create",require("./todo.controller").sendDetail);
router.delete("/delete",require("./todo.controller").deleteDetail);
router.patch("/update",require("./todo.controller").editDetail);

 module.exports=router;