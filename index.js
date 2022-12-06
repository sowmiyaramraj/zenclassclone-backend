const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const auth=require("./module/authmodule");
const userRouter=require("./router/userrouter");
const syllabusRouter=require("./router/syllabusrouter");
const certificateRouter=require("./router/certificaterouter");
const registerrouter=require("./router/registerrouter");
const mongo=require("./connect");
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

app.listen(process.env.PORT || 3001);