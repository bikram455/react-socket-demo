import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:8000');

export const firstAction = () => {
    console.log('this is first ation');
    socket.emit('action', 'first action');
}

export const secondAction = () => {
    console.log('this is second ation');
    socket.emit('action', 'second action');
}

export const thirdAction = () => {
    console.log('this is third ation');
    socket.emit('action', 'third action');
}

export const fourthAction = () => {
    console.log('this is fourth ation');
    socket.emit('action', 'fourth action');
}

socket.on('sub-action',  () => {
    console.log('this is a sub-action.');
});

// export { subscribeToTimer, firstAction };