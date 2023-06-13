import express from 'express';

const app = express();

app.use("/api" , (req , res , next)=>{
    res.send("BLOG APP");
})

app.listen(5000 , ()=>{
    console.log("Server listening on 5000")
})