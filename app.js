var express = require('express'), // gets the express framework for the app
    bodyParser = require('body-parser'), // gets body-parser for the app
    ejs = require('ejs'), // gets ejs for the app
    app = express(); // set app to express so it can be used in the app

var articles = []; // faux database

app.use(bodyParser.urlencoded()); // tells app to use body-parser
app.engine('html', ejs.__express); // tells the ap to use ejs
app.set('view engine', 'ejs'); // makes ejs default so you don't have to use .ejs



app.get('/articles/new', function(req,res){ // new article form to capture info
	res.render('articles/new');
});

app.get('/articles/:id', function(req, res){
  var index = req.params.id;
  var article = articles[index];
  res.render("articles/show", {article: article})
});

app.get('/articles', function(req,res){
  res.render("articles/summary", {articles: articles});
});

app.post('/articles', function(req, res){
  console.log(req.body.article);
  articles.push(req.body.article);
  res.redirect('/articles');
});




// listens for server connection and logs server message
app.listen(3000,function(){
  console.log("SERVER STARTED on localhost:3000");
});