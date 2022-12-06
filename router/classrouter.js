const express=require("express");
const router=express.Router();
const classModule=require("../module/classmodule");
const auth=require("../module/authmodule");

router.get("/get",classModule.getclass);

router.put("/update/:classid",classModule.updateclass);

router.delete("/delete/:id",classModule.deleteclass);

router.post("/create",classModule.createclass);

module.exports=router;