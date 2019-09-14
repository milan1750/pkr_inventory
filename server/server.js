const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const PORT = 3000;
const app = express();
const cors = require('cors');
app.use(cors())

app.use(bodyParser.json());
app.use('/api',api);
app.get('/', function (req, res){
    res.send('Hello from server');
});

app.listen(PORT,function(){
    console.log('Server Running on local host at port localhost:'+PORT);
})