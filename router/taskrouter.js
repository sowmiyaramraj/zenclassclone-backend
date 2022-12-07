const express=require("express");
const router=express.Router();
const taskModule=require("../module/taskmodule");
const auth=require("../module/authmodule");

router.get("/get",taskModule.gettask);

router.put("/update/:taskid",taskModule.updatetask);

router.delete("/delete/:id",taskModule.deletetask);

router.post("/create",taskModule.createtask);

module.exports=router;