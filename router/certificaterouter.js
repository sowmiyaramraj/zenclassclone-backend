const express=require("express");
const router=express.Router();
const certificateModule=require("../module/certificatemodule");
const auth=require("../module/authmodule");

router.get("/get",certificateModule.getcertificate);

router.put("/update/:certificateid",certificateModule.updatecertificate);

router.delete("/delete/:id",certificateModule.deletecertificate);

router.post("/create",certificateModule.createcertificate);

module.exports=router;
