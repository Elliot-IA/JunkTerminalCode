const express = require("express"); 
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const request = require("request");

app.use(express.static(path.join(__dirname, ".")));
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));

function c(s){console.log(s)}

console.log("Server Initiated! Working Directory (for server js file):"+path.join(__dirname, "."));

const PORT = process.env.PORT || 2261;
app.listen(PORT, function(){
    console.log("Server started on port 2261");
});

app.get("/", function(req, res){
    request({url:"https://alertzy.app/send?accountKey=m143fegulr79ila&title=Junk Runner Ping!&message=Someone filled out a post-it and pinged the junk runner!",json:true}, (error, response)=>{
        res.send("The junk runner has been notified!");
    });
});