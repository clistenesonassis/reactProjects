const express = require('express');
const bodyParser = require('body-parser');

const app  = express();

app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: false }) );


app.get('/', function(req, res) {
    res.send("Funcionando o servidor");
});

app.use('/api', require('./router') ); 

app.use(express.static(__dirname + '../frontend/'));

const port = 3232;

app.listen(port, () => {
    console.log("Server running on http://localhost:", port);
});