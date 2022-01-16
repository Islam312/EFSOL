import WebSocketServer from 'ws';

let connect = new WebSocketServer({ port: '8787' });

connect.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('message =>>', message);
  });
  ws.on('close', () => {
    console.log(' lose client ');
  });
});
