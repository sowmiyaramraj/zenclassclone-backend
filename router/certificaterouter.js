const express=require("express");
const router=express.Router();
const certificateModule=require("../module/certificatemodule");
const auth=require("../module/authmodule");

router.get("/get",certificateModule.getcertificate);

router.put("/update/:certificateid",auth.authorizeuser,certificateModule.updatecertificate);

router.delete("/delete/:id",auth.authorizeuser,certificateModule.deletecertificate);

router.post("/create",auth.authorizeuser,certificateModule.createcertificate);

module.exports=router;