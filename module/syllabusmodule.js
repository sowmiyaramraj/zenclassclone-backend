const mongo = require("../connect");
const {ObjectId}= require("mongodb");

module.exports.getsyllabus=async(req,res,next)=>{
    try{
        const getsyllabus= await mongo.selectedDb
        .collection("syllabus")
        .find().toArray();
        res.send(getsyllabus);
    }catch(err){
        res.status(500).send(getsyllabus);

    }
  
};

module.exports.updatesyllabus=async(req,res,next)=>{
  try{
    const id=req.params.syllabusid;
  const updatedresponce=await mongo.selectedDb
  .collection("syllabus")
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

module.exports.createsyllabus=async(req,res,next)=>{
   try{
   const insertedresponse=await mongo.selectedDb
   .collection("syllabus")
   .insertOne(req.body);
   res.send(insertedresponse);
   }
   catch(err){
    console.error(err);
    res.status(500).send(err);
   }
};

module.exports.deletesyllabus=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const deletedresponce=await mongo.selectedDb
        .collection("syllabus")
        .remove({_id:ObjectId(id)});
        res.send(deletedresponce);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
       }
};                  