const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
var uname = "john"
var pass = 123

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.post("/login", function (req, res){
    if(req.body.username === uname && Number(req.body.password) === pass){
        res.send(true)
    } else {
        res.send(false)
    }

})

app.listen(3000, function (){
    console.log("Server started...")
})