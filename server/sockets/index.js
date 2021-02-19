const socket = (io) => {
  io.on("connection", (socket) => {
    console.log("user connecteddddd");

    socket.on("onChangeWord", (data) => {
      console.log(data, '<<<< data masuk ke server');
      io.emit("receiveOnChangeWord", data)
    })

  })
}

module.exports = socket