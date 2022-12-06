const mongo = require("../connect");
const {ObjectId}= require("mongodb");

module.exports.getcertificate=async(req,res,next)=>{
    try{
        const getcertificate= await mongo.selectedDb
        .collection("certificate")
        .find().toArray();
        res.send(getcertificate);
    }catch(err){
        res.status(500).send(getcertificate);

    }
  
};

module.exports.updatecertificate=async(req,res,next)=>{
  try{
    const id=req.params.certificateid;
  const updatedresponce=await mongo.selectedDb
  .collection("certificate")
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

module.exports.createcertificate=async(req,res,next)=>{
   try{
   const insertedresponse=await mongo.selectedDb
   .collection("certificate")
   .insertOne(req.body);
   res.send(insertedresponse);
   }
   catch(err){
    console.error(err);
    res.status(500).send(err);
   }
};

module.exports.deletecertificate=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const deletedresponce=await mongo.selectedDb
        .collection("certificate")
        .remove({_id:ObjectId(id)});
        res.send(deletedresponce);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
       }
};                  