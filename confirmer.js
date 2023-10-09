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

const PORT = process.env.PORT || 2263;
app.listen(PORT, function(){
    console.log("Server started on port 2263");
});

app.get("/", function(req, res){
    request({url:"https://alertzy.app/send?accountKey=m143fegulr79ila&title=Junk Pickup Confirmed!&message=Someone confirmed they picked up a junk request from the Toaster!",json:true}, (error, response)=>{
        res.sendFile(__dirname+"/confimation.html");
    });
});
