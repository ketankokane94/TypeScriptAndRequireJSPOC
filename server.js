const express = require('express');
var path    = require("path");
const app = express();
app.use(express.static(__dirname)); // this is required to load the scripts files without this it fails

app.get('/',(request,res)=>{
    console.log('eureka11');
    res.sendFile(path.join(__dirname+'/index.html'));
});


app.listen(3000,()=>{console.log('listening on port 3000')});