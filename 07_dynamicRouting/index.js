const express = require('express');
const app = express();
const path = require('path');


app.use(express.json()); //Parses incoming JSON request bodies (like from APIs) and makes them available in req.body.
app.use(express.urlencoded({extended: true})); // Parses URL-encoded form data (like from HTML forms) and also puts it in req.body.
app.use(express.static(path.join(__dirname, 'public'))); // Serves static files (like CSS, images, JS) from the public folder, making them accessible via browser URLs.
app.set("view engine", "ejs"); // Sets EJS as the templating engine to render dynamic HTML pages using .ejs files.

app.get("/" ,(req, res)=>{
    res.render("index.ejs");
})
app.get("/profile/:username", (req, res)=>{
     
    res.send(`you are most welcome Mr. ${req.params.username}`);
})
app.get("/about/:username/:age", (req, res)=>{
     
    res.send(`name of use is ${req.params.username} and the age is ${req.params.age}`);
})

app.listen(3000, ()=>{
    console.log("its running");
})