const express = require('express');
const users = require('./db.json');
const app = express();

const port = process.env.PORT || 3000

app.get('/aqi/user',(req,res) =>  {
    res.json(users);
});

app.get('/aqi/user/:id',(req,res) =>  {
    res.json(users.find(user => user.id === Number(req.params.id)))
})


app.get("/Benchamart", (req, res) => { res.send("Hello! My name is Benchamart");});

app.listen(port, () => {
    console.log("Starting node.js at http://127.0.0.1:" + port + "/Benchamart");

});