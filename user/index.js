const fetchRouter = require("router");
var router = fetchRouter();

router.post("/signup",require("./user.controller").sendDetail);
router.post("/login",require("./user.controller").login);


 module.exports=router;