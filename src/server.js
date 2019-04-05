const io = require('socket.io')();
var players = [];

// io.on('connection', (client) => {
//     client.on('subscribeToTimer', (interval) => {
//     console.log('client is subscribing to timer with interval ', interval);
//     setInterval(() => {
//       client.emit('timer', new Date());
//     }, interval);
//   });
// });

io.on('connection', (client) => {
    console.log('a new client is connected');
    client.on('action', 
        (action) => {
            console.log('the action is: ', action);
            client.emit('sub-action', null);
        }
    );
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);