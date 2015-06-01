// Setup basic express server
var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));


// handle Sockets
io.on('connection', function (socket) {
  
    /*
    * socket events
    */
  
    socket.on("calcularPosition", function(coordinate){
      if(coordinate.x > 300 &&
         coordinate.y > 300 &&
         coordinate.x < 600 &&
         coordinate.y < 600  ){
           socket.emit("rataMensaje", { message: "rata en la jaula" });
      }else{
           socket.emit("rataMensaje", { message: "la rata se escapo de la jaula" });
      }
       
    });
});