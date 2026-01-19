const express = require("express");
const app = express();
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const commentRouter = require("./routes/commentRouter.js")
const userRouter = require("./routes/userRouter.js");
const postsRouter = require("./routes/postsRouter.js");

const port = process.env.PORT || 8000

try{
mongoose.connect(process.env.DB_URI)
}catch(e){
    console.log(e)
}
const db = mongoose.connection
db.on("error",(err)=>{
console.log(err)
})
db.once("open",()=>{
    console.log("Connected to the DB")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use("", commentRouter);
app.use("", postsRouter);
app.use("", userRouter);

app.listen(port, ()=>{
    console.log(`The App is running at localhost:${port}`)
})
