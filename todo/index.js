const fetchRouter = require("router");
var router = fetchRouter();

router.post("/create/:userId",require("./todo.controller").sendDetail);
router.get("/get/:userId",require("./todo.controller").getDetail);
router.delete("/delete",require("./todo.controller").deleteDetail);
router.patch("/update",require("./todo.controller").editDetail);

 module.exports=router;