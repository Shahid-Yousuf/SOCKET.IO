const express = require('express');
const app = express();
const http = require('http');
app.get('/',(request,response)=>{
   response.sendFile(__dirname+'/frontend/index.html');
})


const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

io.on('connection',(socket)=>{
   //here server is listening
   console.log('client connected');
   socket.on('disconnect',()=>{
      console.log('client disconnected');
   });

   socket.on('clientevent',(payload)=>{
      console.log(payload);
      io.emit('serverevent','server says  '+payload);
   });

  
});

server.listen(8080)



