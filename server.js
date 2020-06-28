// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();

// https://expressjs.com/en/starter/basic-routing.html
var toLowerCase = require('lowercase-keys');
var todos = [
  		'Go to market',
  		'nấu cơm',
  		'Washing dishes',
  		'Learing at coderX-Tokyo'
  	]
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { title: '1-hello', message: 'TODO - LIST', 
  	todoList: todos
   })
});

app.get('/todos/search', function (req, res) {
 	var q = req.query.q;
 	var matchedActive = todos.filter(function(active){
 		return  toLowerCase(active).indexOf(toLowerCase(q)) !== -1;
 	});
 	res.render('index', {title: '3-Query Parameters', message: 'TODO - LIST',
 		search: q,
 		todoList: matchedActive
 	});
})

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
