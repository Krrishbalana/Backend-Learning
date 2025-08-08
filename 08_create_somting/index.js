const express = require("express");
const app = express();
const path = require("path")
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public"))); 


app.get("/", (req, res)=>{
    fs.readdir(`./files`, (err, files)=>{
        console.log(files);
        res.render("index.ejs", {tasks: files});
    })
    
})

app.post("/create", (req, res)=>{
    console.log(req.body);
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, (err)=> {
        if(err){
            res.send(err);
        }
        res.redirect('/');
    })

})
app.get("/files/:filename", (req, res)=>{
    console.log(req.params.filename);
    fs.readFile(`files/${req.params.filename}`, "utf-8" , (err, data)=> {
        if(err) {
            res.send(err);
        }else{
            res.render('data', {filename: req.params.filename, filedata: data})
        }
    })
})

app.listen(4000, function(){
    console.log("server is running hey");
})