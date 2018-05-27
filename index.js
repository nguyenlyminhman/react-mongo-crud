const express = require ('express');
const config =  require ('config');
const app = express();


app.get('/',(req,res)=>{
    res.send('ok man')
})
var port = config.get("server.port")
app.listen(port, (req,res)=>{
    console.log('Server is listening on port', port )
})