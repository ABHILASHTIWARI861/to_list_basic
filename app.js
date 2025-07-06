const express = require('express');
const bodyparser = require('body-parser');
const app =express();

app.set('view engine','ejs'); // It tells our app to use ejs. // Exactly copy paste app.set('view engine','ejs');

app.get('/',function(req,res){
    const date=new Date();
    const current_day=date.getDay();

  var ans ="";
   switch (current_day) {   // if else bhi use kr skte ho, pr jb items 5 se jyada ho jae to switch case prefer kro. 
    case 0:
        ans="suday";
        break;
    case 1:
        ans="Monday";
        break;    
   case 2:
        ans="Tuesday";
        break;
   case 3:
        ans="Wednesday";
        break;
   case 4:
        ans="Thursday";
        break;
   case 5:
        ans="Friday";
        break;
   case 6:
        ans="Saturday";
        break;
    default:
        console.log("some error found");
        break;
   }
// syntax res.render("ejs file name",{key:value});
res.render("list",{Date_batao:ans});  //it tell the page we are going to render here we are rendering list.ejs // 
})

app.listen(3000,function(){
    console.log("server is running on port 3000");
})