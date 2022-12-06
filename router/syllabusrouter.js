const express=require("express");
const router=express.Router();
const syllabusModule=require("../module/syllabusmodule");
const auth=require("../module/authmodule");

router.get("/get",syllabusModule.getsyllabus);

router.put("/update/:syllabusid",syllabusModule.updatesyllabus);

router.delete("/delete/:id",syllabusModule.deletesyllabus);

router.post("/create",syllabusModule.createsyllabus);

module.exports=router;