const mongo = require("../connect");
const {ObjectId}= require("mongodb");

module.exports.getuser=async(req,res,next)=>{
    try{
        if(req.body.currentuser.email===currentuser.email){
            const getuser= await mongo.selectedDb
        .collection("user")
        .find({email:currentuser.email}).toArray();
        res.send(getuser);    
        }       
    }catch(err){
        res.status(500).send(getuser);

    }
  
};         