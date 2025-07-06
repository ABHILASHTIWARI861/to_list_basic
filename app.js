const express = require('express');
const bodyparser = require('body-parser');
const app =express();

app.get('/',function(req,res){
    const curr_date=new Date();

if(curr_date.getDay() ===2 || curr_date.getDay() ===4){
 res.send("It's the weekend!");
}
    else{
    res.sendFile(__dirname + '/index.html');
}
})

app.listen(3000,function(){
    console.log("server is running on port 3000");
})