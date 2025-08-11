const cookieParser = require('cookie-parser');
const express = require('express')
const bcrypt = require('bcrypt');
const app = express();


app.use(cookieParser());

app.get('/', (req, res)=>{
    res.cookie("name", "krish balana cokkie")
    res.send("done")
})

app.get('/about', (req, res)=>{
    console.log(req.cookies);
    res.send("about")
})

app.get('/pass', (req, res)=>{
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash('Krish@86', salt, function(err, hash) {
            console.log(hash);

        });
    });
})

app.get('/compare', (req, res)=>{
    // Load hash from your password DB.
bcrypt.compare('Krish@86', '$2b$10$kD3WZeZHHmMdR1K8JMniIuzJbk0s/6rGcYetOVrZi0FeV/QD.Os8m', function(err, result) {
    // result == true
    console.log(result);
});
})

app.listen(3000);