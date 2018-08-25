var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
 
var userService = require('./service/user.js');

app.ws('/echo', function(socket, req) {
  console.log('a user connected');
  socket.on('close', function(){
    console.log('user disconnected');
  });
  
  socket.on('message', function(msg){
    console.log('user message: ' + msg);
    try {
      userService.handle(JSON.parse(msg),socket);  
    } catch (error) {
      console.error(error);
    }
  });
});
 
app.listen(3000,function(){
  console.log("listen in 3000");
});
