const socket = (io) => {
  io.on("connection", (socket) => {
    console.log("user connected");

    socket.on("getDataWord", (data) => {
      console.log(data, '<<<< data masuk ke server');
      io.emit("receiveGetDataWord", data)
    })

  })
}

module.exports = socket