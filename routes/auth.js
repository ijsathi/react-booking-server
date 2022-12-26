import express from "express";

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("hello This in Auth")
});

router.get("/register", (req, res)=>{
    res.send("hello This in Register")
});

export default router;