import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path"; // dunno why but the relative path was giving error most likey due to the fact that after compiling it was messing with the paths

const app = express();

const envPath = path.resolve(__dirname, "../config.env")
dotenv.config({ path: envPath });

app.use(express.json()); // parse body sent with request

app.use(morgan("dev")); // for logging all the requests

app.use('/', (req, res)=>{
  console.log(req.ip);
  res.status(200).json({
    message: "We are talking from on tor network",
    status: 'success'
  })
})

export default app;


