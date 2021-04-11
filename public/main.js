var socket = io('https://cameras-de-seguranca.herokuapp.com/');
socket.on('connect', () => {
    socket.emit('init_msg', 'eu, "'+socket.id+'", digo que estou conectado')
  
    socket.on('init_msg', (msg) => {
      console.log(msg)
    })
  })
  
