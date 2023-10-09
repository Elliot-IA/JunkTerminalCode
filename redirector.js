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

const PORT = process.env.PORT || 1300;
app.listen(PORT, function(){
    console.log("Server started on port 2260");
});

app.get("/", function(req, res){
    request({url:"https://alertzy.app/send?accountKey=m143fegulr79ila&title=Catalog View!&message=Someone went to Junk Catalog from poster in the Toaster!",json:true}, (error, response)=>{
        res.redirect("https://docs.google.com/document/d/1584L5SXOTVVuZVVCHWxVu_FE_lUgARTPWokM9WpV1Bo/edit");
    });
});
