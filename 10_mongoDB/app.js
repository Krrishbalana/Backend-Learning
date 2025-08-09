const express = require("express");
const app = express();
const path = require('path');
const port = 3000;
const userModel = require('./models/user')


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
 

app.get("/", (req, res)=>{
    res.render('form');
}) 

app.get("/read", async (req, res)=>{
    let allusers = await userModel.find();
    res.render('users', {users: allusers});
}) 

app.get("/delete/:id", async (req, res)=>{
    await userModel.findByIdAndDelete(req.params.id);
    res.redirect("/read");

})
app.get("/update")

app.post("/create", async (req, res)=>{
    let {name, email, image} = req.body;

    let createduser = await userModel.create({
        name: name,
        email: email,
        image: image,
    })

    res.redirect("/read");
})

app.listen(port, ()=>{
    console.log(`running on http://localhost:${port}`);
});