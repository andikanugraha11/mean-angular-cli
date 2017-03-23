// Dependencies

const express		= require('express');
const path			= require('path');
const http			= require('http');
const bodyParser	= require('body-parser');

//API route
const api = require('./server/routers/api');

const app = express();

//Parsesr for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//static file
app.use(express.static(path.join(__dirname, 'dist')));

//set API routes
app.use('/api', api);

//404 file

app.get('*', (req,res)=>{
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port,()=>{
	console.log(`server berjalan pada server ${port}`);
})