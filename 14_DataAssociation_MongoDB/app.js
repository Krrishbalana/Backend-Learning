const express = require('express')
const app = express();

const userModel = require('./models/user');
const postModel = require('./models/post');

const port = 3000;

app.get('/', (req, res)=>{
    res.send('WELCOME')
})

app.get('/create', async (req, res) => {
    let user = await userModel.create({
        username: 'krish',
        email: 'krish@gmail.com',
        age: 22,
    })

    res.send(user);
})

app.get('/post/create', async (req, res) => {
    let post = await postModel.create({
        postdata: 'helo sb kasie ho',
        user: '689af29dbb8d08e6360672ad',
    })

    let user = await userModel.findOne({_id: '689af29dbb8d08e6360672ad'})
    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
})




app.listen(port, ()=>{
    console.log(`running on http://localhost:${port}`);
})