const express=require("express");
const router=express.Router();
const syllabusModule=require("../module/syllabusmodule");
const auth=require("../module/authmodule");

router.get("/get",syllabusModule.getsyllabus);

router.put("/update/:syllabusid",auth.authorizeuser,syllabusModule.updatesyllabus);

router.delete("/delete/:id",auth.authorizeuser,syllabusModule.deletesyllabus);

router.post("/create",auth.authorizeuser,syllabusModule.createsyllabus);

module.exports=router;