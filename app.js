const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get()

//let userData = {
  //name: module.exports.users.name,





//};


app.listen(3000, function(){
  console.log("listening.");
});
