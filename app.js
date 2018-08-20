var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
// mysql://b9c97d8c49c551:3e5f2523@us-cdbr-iron-east-01.cleardb.net/heroku_3108c0fccd7a9e6?reconnect=true
var connection = mysql.createConnection(
  ?mysql:b60b3625b63873:f13b3959@us-cdbr-iron-east-01.cleardb.net/heroku_504b26535c92ed2?reconnect=true
  {
    host:'us-cdbr-iron-east-01.cleardb.net',
  user:'b60b3625b63873',
  password:'f13b3959',
  database:'heroku_504b26535c92ed2'
});
connection.connect(function(error)
{
  if(!!error)
  {
    console.log(error);
  }
  else {
    {
      console.log('connected');
    }
  }
});
app.get('/',function(req,res)
{

res.render("home.ejs");
});
app.post("/season/:id",function(req,res)
{
  var sea=req.params.id;
  connection.query("SELECT * FROM  SHARK1 WHERE "+sea , function(err,rows,fields){
if(err)
{
  console.log(err);
}
else
  {
console.log("connected successfully");
var tab="<h2 class='h1-responsive font-weight-bold my-5 text-center'><i class='fa fa-angle-double-right' style='color:#ef6c00;' aria-hidden='true'></i>FILTERED RESULTS<i class='fa fa-angle-double-left' style='color:#ef6c00;' aria-hidden='true'></i></h2>";
  tab+="<table class='table'>";
  tab+="<thead class='black white-text'>";
  tab+="<tr><th scope='col'>S.NO</th><th scope='col'>SEASON</th><th scope='col'>EPISODE</th><th scope='col'>COMPANY</th><th scope='col'>DEAL</th><th scope='col'>INDUSTRY</th><th scope='col'>GENDER</th><th scope='col'>AMOUNT</th><th scope='col'>EQUITY</th><th scope='col'>VALUATION</th><th scope='col'>CORCORAN</th><th scope='col'>CUBAN</th><th scope='col'>GREINER<</th><th scope='col'>HERJAVEC</th><th scope='col'>JOHN</th><th scope='col'>OLEARY</th><th scope='col'>HARRINGTON</th><th scope='col'>GUEST</th><th scope='col'>SHARKS</th><th scope='col'>$PERSHARK</th><th scope='col'>DETAILS</th></tr></thead><tbody>";
  for(var i in rows)
  {
    tab+="<tr><td>"+i+"</td><td>"+rows[i].SEASON+"</td><td>"+rows[i].EPISODE+"</td><td>"+rows[i].COMPANY+"</td><td>"+rows[i].DEAL+"</td><td>"+rows[i].INDUSTRY+"</td><td>"+rows[i].GENDER+"</td><td>"+rows[i].AMOUNT+"</td><td>"+rows[i].EQUITY+"</td><td>";
    tab+=rows[i].VALUATION+"</td><td>"+rows[i].CORCORAN+"</td><td>"+rows[i].CUBAN+"</td><td>"+rows[i].GREINER+"</td><td>"+rows[i].HERJAVEC+"</td><td>"+rows[i].JOHN+"</td><td>"+rows[i].OLEARY+"</td><td>"+rows[i].HARRINGTON+"</td><td>"+rows[i].GUEST+"</td><td>"+rows[i].SHARKS+"</td><td>"+rows[i].PERSHARK+"</td><td>";
    tab+=rows[i].DETAILS+"</td></tr>";
  }
  tab+="</tbody></table>"
    res.send(tab);
  }
});
});
app.listen(process.env.PORT || 1337);
