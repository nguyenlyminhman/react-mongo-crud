const express = require ('express');
const config =  require ('config');
const apiRouter = require('./api/index');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(express.static('./public'));

app.use('/', apiRouter);

var port = config.get("server.port")
app.listen(port, (req,res)=>{
    console.log('Server is listening on port', port )
});
