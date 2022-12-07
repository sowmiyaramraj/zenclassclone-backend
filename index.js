const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const auth=require("./module/authmodule");
const userRouter=require("./router/userrouter");
const classRouter=require("./router/classrouter");
const syllabusRouter=require("./router/syllabusrouter");
const certificateRouter=require("./router/certificaterouter");
const requirementRouter=require("./router/requirementrouter");
const registerrouter=require("./router/registerrouter");
const profilerouter=require("./router/profilerouter");

const mongo=require("./connect");
const crypto = require('crypto');
dotenv.config();
mongo.connect();
const app=express();
app.use(express.json());
app.use(cors());


app.use("/register",registerrouter);
app.use("/",auth.authenticateuser);
app.use("/user",userRouter);
app.use("/syllabus",syllabusRouter);
app.use("/certificate",certificateRouter);
app.use("/requirement",requirementRouter);
app.use("/class",classRouter);
app.use("/profile",profilerouter);

app.listen(process.env.PORT || 3001);