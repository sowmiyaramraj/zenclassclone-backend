const express=require("express");
const router=express.Router();
const profileModule=require("../module/profilemodule");
const auth=require("../module/authmodule");

router.get("/get",profileModule.getuser);


module.exports=router;
