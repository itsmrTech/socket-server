var io=require('socket.io')();

io.on('connection', function (socket) {
    socket.emit('connected', {message:'you are connected'});
    socket.on('emit-name', function (data) {
      console.log(data);
      socket.emit('your-emit-data',data);
    });
  });
  io.listen(2200);