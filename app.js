var express = require('express');
var mysql = require('mysql');
var app = express();
var http=require("http");
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var connection = mysql.createConnection(
  {
    host:'us-cdbr-iron-east-01.cleardb.net',
  user:'be4a08ed47e631',
  password:'dee3f70d',
  database:'heroku_df00c235a7e0d18'
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
  var tab="<table border='1 px'><thead>"
  tab+="<th>S.NO</th><th>SEASON</th><th>EPISODE</th><th>COMPANY</th><th>DEAL</th><th>INDUSTRY</th><th>GENDER</th><th>AMOUNT</th><th>EQUITY</th><th>VALUTION</th><th>CORCORAN</th><th>CUBAN</th><th>GREINER</th><th>HERJAVEC</th><th>JOHN</th><th>OLEARY</th><th>HARRINGTON</th><th>GUEST</th><th>SHARKS</th><th>$PERSHARK</th><th>DETAILS</th></thead><tbody>"
  for(var i in rows)
  {
    tab+="<tr><td>"+i+"</td><td>"+rows[i].SEASON+"</td><td>"+rows[i].EPISODE+"</td><td>"+rows[i].COMPANY+"</td><td>"+rows[i].DEAL+"</td><td>"+rows[i].INDUSTRY+"</td><td>"+rows[i].GENDER+"</td><td>"+rows[i].AMOUNT+"</td><td>"+rows[i].EQUITY+"</td><td>";
    tab+=rows[i].VALUATION+"</td><td>"+rows[i].CORCORAN+"</td><td>"+rows[i].CUBAN+"</td><td>"+rows[i].GREINER+"</td><td>"+rows[i].HERJAVEC+"</td><td>"+rows[i].JOHN+"</td><td>"+rows[i].OLEARY+"</td><td>"+rows[i].HARRINGTON+"</td><td>"+rows[i].GUEST+"</td><td>"+rows[i].SHARKS+"</td><td>"+rows[i].PERSHARK+"</td><td>";
    tab+=rows[i].DETAILS+"</td></tr>"
  }
  tab+="</tbody></table>"
    res.send(tab);
  }
});
});app.listen(process.env.PORT || 1337);
