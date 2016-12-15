var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
	res.send('Hola amies!')
})

app.get('/data', function(req, res){
	res.json([1,2,3,4]);
})

app.listen(process.env.PORT || 1989, function() {
  console.log('Server started at Port 1989');
});