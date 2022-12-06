const mongo = require("../connect");
const {ObjectId}= require("mongodb");

module.exports.getclass=async(req,res,next)=>{
    try{
        const getclass= await mongo.selectedDb
        .collection("class")
        .find().toArray();
        res.send(getclass);
    }catch(err){
        res.status(500).send(getclass);

    }
  
};

module.exports.updateclass=async(req,res,next)=>{
  try{
    const id=req.params.classid;
  const updatedresponce=await mongo.selectedDb
  .collection("class")
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

module.exports.createclass=async(req,res,next)=>{
   try{
   const insertedresponse=await mongo.selectedDb
   .collection("class")
   .insertOne(req.body);
   res.send(insertedresponse);
   }
   catch(err){
    console.error(err);
    res.status(500).send(err);
   }
};

module.exports.deleteclass=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const deletedresponce=await mongo.selectedDb
        .collection("class")
        .remove({_id:ObjectId(id)});
        res.send(deletedresponce);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
       }
};                  