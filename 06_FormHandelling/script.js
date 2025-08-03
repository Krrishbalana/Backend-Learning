const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true})); 


app.use((req, res, next)=>{
    console.log("middleware chla");
    next();
})

app.get("/", function (req, res) {
  res.send('middle ware k baad ata hai -> Hello World, how r you?')
});

app.get("/profile", function (req, res) {
    res.send('after middleware golu -> now you are on profile!')
});
  
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })  

app.listen(3000)