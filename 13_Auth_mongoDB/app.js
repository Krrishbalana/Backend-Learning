const express = require('express')
const app = express();

const userModel = require('./models/user')

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser');
const path = require('path')
const port = 3000;

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
    res.render('index');
})

app.post('/create', (req,res)=>{
    let {username, email, password, age} = req.body;

    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(password, salt, async (err, hash)=>{
            let createdUser = await userModel.create({
                username,
                email,
                password: hash,
                age,
            })

            const token = jwt.sign({email}, 'shhhhh');
            res.cookie('token', token);

            res.send(createdUser);
        })
    })

    
    
})

app.get('/logout', (req,res)=>{
    res.cookie('token', '');
    res.redirect('/')
})

app.get('/login',(req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    let user = await userModel.findOne({email: req.body.email});
    if(!user){
        return res.send('Something went wrong, try again later');
    }
    bcrypt.compare(req.body.password, user.password, (err, result)=>{
        if(result){ 
            const token = jwt.sign({email: user.email}, 'shhhhh');
            res.cookie('token', token);

            return res.send("yes you are loged In")
        }
        else{ return res.send("Something went wrong, try again later")}
    })
})

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
})