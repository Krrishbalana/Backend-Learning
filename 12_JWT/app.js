const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
var jwt = require('jsonwebtoken');
const port = 3000;
app.use(cookieParser());

app.get('/', (req, res) =>{
    res.send('HOME PAGE');
})

app.get('/jwt', (req, res)=>{
    let token = jwt.sign({email: 'krish@gmail.com'}, 'secret');
    res.cookie('token', token);
    res.send('DONE');
})
app.get('/read', (req, res)=>{
    console.log(req.cookies.token);
    res.send(`token hai =====>  ${req.cookies.token}`);
})

app.get('/verify', (req, res)=>{
    let data = jwt.verify(req.cookies.token, 'secret')
    console.log(data);
    res.send('VERIFICATION DONE')
})


app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`);
})