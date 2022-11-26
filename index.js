const express = require('express');
const app = express();
const fs = require('fs')

app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/", function (req,res){
    res.sendFile("/index.html")
})

app.post("/", (req, res) => {
    console.log(req.body)
    //res.send("mediante post")
    fs.writeFile("public/data.txt", JSON.stringify(req.body), function(err){
        if(err){
            return console.log(err);
        }
        console.log("The file was saved!");
    })
    res.send(req.body)
})

app.get("/click", function (req,res){
    fs.readFile("public/data.txt", "utf-8", (err,data) => {
        if(err){
            return console.log(err);
        }
        res.send(JSON.stringify(data))
    })
})
app.listen(3000, function() {console.log("Servidor lanzado en el puerto 3000")})

