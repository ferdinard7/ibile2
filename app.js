
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.set('view engine', 'ejs');


app.get("/", function(req, res){
  res.render("index");
})


app.get("/about.ejs", function(req, res){
  res.render("about");
})

app.get("/service.ejs", function(req, res){
  res.render("service");
})

app.get("/menu.ejs", function(req, res){
  res.render("menu");
})

app.get("/order.ejs", function(req, res){
  res.render("order");
})

app.get("/contact.ejs", function(req, res){
  res.render("contact");
})




app.listen(4000, function(){
  console.log("server started at port 4000");
})
