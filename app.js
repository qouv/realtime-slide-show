const express = require('express');
const http = require('http');   
const path = require('path')
const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);

const slideRoutes = require('./routes/slide');


app.use(slideRoutes);


io.on('connection', (socket) => {
  console.log('user connected');
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('change content',({title,text}) => {
    io.emit('change slide', {title: title, text: text});
  });
});


server.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening on port ' + server.address().port);
})