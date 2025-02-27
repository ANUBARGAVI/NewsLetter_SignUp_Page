const express = require("express")
const bodyParser = require("body-parser")


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/",function(req,res){
    var fname = req.body.FName;
    var Lname = req.body.LName;
    var email = req.body.email;

    console.log(fname,Lname,email);

    if (email) {
        res.sendFile(__dirname + "/success.html");
    } else {
        res.sendFile(__dirname + "/failure.html");
    }
})



app.listen(3000,function(){
    console.log("server is running")
})

