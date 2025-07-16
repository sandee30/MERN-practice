const express = require('express');
const app = express();

app.set("view engine","ejs");

app.get('/', (req, res)=> {
    res.render("index");
})

PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`server running at port: ${PORT}`)
})