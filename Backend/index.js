import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express()

app.use(cors());
app.use(express.json());//use for sending data


dotenv.config();

const port = process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI)
    console.log("Connected to mongoDB")
} catch (error) {
    console.log("Error:",error)
}

// defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})