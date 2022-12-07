const express=require("express");
const router=express.Router();
const requirementModule=require("../module/requirementmodule");
const auth=require("../module/authmodule");

router.get("/get",requirementModule.getrequirement);

router.put("/update/:requirementid",requirementModule.updaterequirement);

router.delete("/delete/:id",requirementModule.deleterequirement);

router.post("/create",requirementModule.createrequirement);

module.exports=router;
