const mongo = require("../connect");
const {ObjectId}= require("mongodb");

module.exports.gettask=async(req,res,next)=>{
    try{
        const gettask= await mongo.selectedDb
        .collection("task")
        .find().toArray();
        res.send(gettask);
    }catch(err){
        res.status(500).send(gettask);

    }
  
};

module.exports.updatetask=async(req,res,next)=>{
  try{
    const id=req.params.taskid;
  const updatedresponce=await mongo.selectedDb
  .collection("task")
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

module.exports.createtask=async(req,res,next)=>{
   try{
   const insertedresponse=await mongo.selectedDb
   .collection("task")
   .insertOne(req.body);
   res.send(insertedresponse);
   }
   catch(err){
    console.error(err);
    res.status(500).send(err);
   }
};

module.exports.deletetask=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const deletedresponce=await mongo.selectedDb
        .collection("task")
        .remove({_id:ObjectId(id)});
        res.send(deletedresponce);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
       }
};                  