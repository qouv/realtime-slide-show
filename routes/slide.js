const express = require('express');
const http = require('http');
const showdown = require('showdown');
const path = require('path');
const app = express();
const router = express.Router();

const server = http.Server(app);
const io = require('socket.io')(server);
const converter = new showdown.Converter();



router.get('/',(req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','show.html')); 
});
  



router.get('/edit',(req,res,next) => {
  res.sendFile(path.join(__dirname,'../','views','edit.html'));   
});




module.exports = router;