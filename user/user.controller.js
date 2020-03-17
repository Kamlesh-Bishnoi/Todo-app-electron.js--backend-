var Detail = require("./user.model");
const bcrypt = require('bcrypt');
const saltRounds = 10;

// saving user detail

exports.sendDetail = async (req, res) => {
  if (req.body) {
    try {
      let user=req.body;
      user.password=await  bcrypt.hash(user.password, saltRounds);
      let userDetail = new Detail(user);
      await userDetail.save();
      return res.json({ success: true, data: userDetail, message: "detail saved" });
    } catch (err) {
      return res.json({ success: false, message: err });
    }
  } else {
    return res.json({ success: false, data: "", message: "parameter missing" });
  }
};
 
// Login 

exports.login = async (req,res) =>{
  if(req.body.email && req.body.password){
    try{
        let findUser = await Detail.findOne({email:req.body.email});
       
        if(findUser.email===req.body.email){
        let valuePassword= await  bcrypt.compareSync(req.body.password,findUser.password )
        if(valuePassword){
          return res.json({success:true,data:findUser,message:'logged in '})
        }
        else{
          return res.json({success:false,data:" ", message:"wrong password"})
        }
        }
    }
    catch(err){
      return res.json({success:false,data:"", message:err})

    }
  }
}