const mongo = require("../connect");
const {ObjectId}= require("mongodb");

module.exports.getrequirement=async(req,res,next)=>{
    try{
        const getrequirement= await mongo.selectedDb
        .collection("requirement")
        .find().toArray();
        res.send(getrequirement);
    }catch(err){
        res.status(500).send(getrequirement);
    }  
};

module.exports.updaterequirement=async(req,res,next)=>{
  try{
    const id=req.params.requirementid;
  const updatedresponce=await mongo.selectedDb
  .collection("requirement")
  .findOneAndUpdate({_id:ObjectId(id)},
  {$set:{...req.body}},
 { returnDocument:"after"});
  res.send(updatedresponce);
}
  catch(err){
    console.error(err);
    res.status(500).send(err);
   }
};

module.exports.createrequirement=async(req,res,next)=>{
   try{
   const insertedresponse=await mongo.selectedDb
   .collection("requirement")
   .insertOne(req.body);
   res.send(insertedresponse);
   }
   catch(err){
    console.error(err);
    res.status(500).send(err);
   }
};

module.exports.deleterequirement=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const deletedresponce=await mongo.selectedDb
        .collection("requirement")
        .remove({_id:ObjectId(id)});
        res.send(deletedresponce);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
       }
};          