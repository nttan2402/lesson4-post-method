// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
// https://expressjs.com/en/starter/basic-routing.html

var todos = [
  "Go to market",
  "nấu cơm",
  "Washing dishes",
  "Learing at coderX-Tokyo"
];
app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", function(req, res) {
  res.render("index", {
    title: "1-hello",
    message: "TODO - LIST",
    todoList: todos
  });
});

app.get("/todos", function(req, res) {
  var q = req.query.q;
  var matchedActive = todos.filter(function(active) {
    return active.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render("index", {
    title: "4-post method",
    message: "TODO - LIST",
    search: q,
    todoList: matchedActive
  });
});
app.get('/todos/create', function(req, res) {
	res.render('create');
});

app.post('/todos/create', function(req, res){
	todos.push(req.body.todo);
	res.redirect('/');
});
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
