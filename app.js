const express = require("express");

const dotenv = require("dotenv").config()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const commentRouter = require("./routes/commentRouter.js")
const userRouter = require("./routes/userRouter.js");
const postsRouter = require("./routes/postsRouter.js");

const port = process.env.PORT || 8800

try {
  mongoose.connect(process.env.DB_URI);
} catch (e) {
  console.log(e);
}
const db = mongoose.connection;
db.on("Error on connecting to the database", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("Connected to the DB");
});
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use("/comments", commentRouter);
app.use("/posts", postsRouter);
app.use("/users", userRouter);

app.listen(port, ()=>{
    console.log(`The App is running at localhost:${port}`)
})
