const { urlencoded } = require('express')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes')

const http = require('http').Server(app)
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
    credentials: true
  },
  allowEIO3: true
})

app.use(express.json())
app.use(router)

//Whenever someone connects this gets executed
io.on('connection', function (socket) {
  console.log('A user connected')

  socket.on('test', (data) =>{
    console.log(data);
  })

  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
    console.log('A user disconnected')
  })
})

http.listen(port, () => {
  console.log('listening at port ', port)
})
