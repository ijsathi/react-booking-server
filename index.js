import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = async ()=>{
    try {
        await mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO);
        console.log('mongoDB connect!!');
    } 
      catch (error) {
        throw error
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!!!");
});

mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected!!!");
});

app.get("/", (req, res)=>{
    res.send("hello i am coming")
})

app.listen(5000, ()=>{
    connect()
    console.log("hello!!! backend connected! ");
});