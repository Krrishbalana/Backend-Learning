const express = require('express');
const app = express();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const userModel = require('./models/user');
const postModel = require('./models/post');


const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.render('index');
})

app.post('/register', async (req, res)=>{
    let {name, username, password, email, age} = req.body;
    let user = await userModel.findOne({email});
    if(user) return res.status(500).send('user already rigistered');

    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(password, salt, async (err, hash)=>{
            let user =  await userModel.create({
                name,
                username,
                password: hash,
                email,
                age,
            })
            let token = jwt.sign({email, name, age,  userid: user._id}, 'shhh');
            res.cookie('token', token);
            res.render('profile', {user})
        })
        
    })
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.post('/login' , async (req, res)=>{
    let {email, password} = req.body;
    let user = await userModel.findOne({email});
    if(!user) return res.status(500).send('Something went wrong');
    console.log(user);;
    bcrypt.compare(password, user.password, (err, result)=>{
        if(result) {
            let token = jwt.sign({email,name: user.name, age: user.age, userid: user._id}, 'shhh')
            res.cookie('token', token);
            res.render('Home')
        }
        else{
            return res.redirect('/login');
        } 
    })
})

app.get('/logout', (req, res)=>{
    res.cookie('token', "");
    res.redirect('/login');
})

app.get('/profile', islogedin , async (req, res)=>{
    let user = await userModel.findOne({email: req.user.email})
    user = await user.populate({
        path: 'posts',
        options: { sort: { date: -1 } }  // newest posts first
    })

    res.render('profile', {user})
})

app.post('/post', islogedin , async (req, res)=>{
    const user = await userModel.findOne({email: req.user.email})
    let post = await postModel.create({
        user: user._id,
        content: req.body.content
    })

    user.posts.push(post._id)
    await  user.save(); 
    res.redirect('/profile');
})

function islogedin(req, res, next){
    if(req.cookies.token === ''){
        return res.send('login First');
    }
    let data = jwt.verify(req.cookies.token, 'shhh');
    req.user = data;
    next();
}

app.listen(3000);