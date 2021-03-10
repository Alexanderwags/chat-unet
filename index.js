const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });

});

io.sockets.on('connection', function(socket){

   socket.on('user image',function(image){
       io.sockets.emit('addimage',' ', image);
       console.log('epale menor');
   });
});


http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
