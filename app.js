const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");

app.get('/', (req, res)=> {
    res.render("index");
})

app.post('/get-form-data', (req, res)=>{
    console.log(req.body);
    res.send("data recieved.");
})

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`server running at port: ${PORT}`)
})