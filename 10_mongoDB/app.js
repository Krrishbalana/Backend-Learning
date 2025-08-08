const express = require("express");
const app = express();

app.use(express.json());
 

app.get("/", (req, res)=>{
    res.send("Hello doston kaise ho? ");
})

app.listen(3000);