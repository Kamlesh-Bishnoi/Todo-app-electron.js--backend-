var Detail = require("./todo.model");

exports.sendDetail = async (req, res) => {
  if (req.body) {
    try {
      let task = req.body;
      task.userId=req.params.userId;
      let title = new Detail(task);
      await title.save();
      return res.json({ success: true, data: title, message: "detail saved" });
    } catch (err) {
      return res.json({ success: false, message: err });
    }
  } else {
    return res.json({ success: false, data: "", message: "parameter missing" });
  }
};

exports.getDetail = async (req,res) =>{
  try{
    let getDetail = await Detail.find({userId:req.params.userId});
    return res.json({success:true,data:getDetail,message:"found"})
  }
  catch(err){
    return res.json({success:false,message:err})
  }
}




exports.deleteDetail = async (req, res) => {
  if (req.body._id) {
    let deleteDetail = await Detail.findOneAndDelete({ _id: req.body._id });
    return res.json({ success: true, data: deleteDetail, message: "deleted" });
  } else {
    return res.json({ success: false, data: "", message: "missing" });
  }
};
exports.editDetail = async (req, res) => {
  if (req.body._id && req.body.title) {
    let updateDetail = await Detail.findByIdAndUpdate(
      { _id: req.body._id },
      { $set: { title: req.body.title } },
      { new: true }
    );
    return res.json({
      success: true,
      data: updateDetail,
      message: " detail updated"
    });
  } else {
    return res.json({
      success: false,
      data: " ",
      message: "parameter missing"
    });
  }
};
