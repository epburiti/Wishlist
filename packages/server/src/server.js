const http = require('http');
const app = require('./app');

const server = http.createServer(app);
// prod
const port = process.env.PORT || 8080;
// homolog

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
// server.on('liste', onListening);
// function onListening() {
//   const addr = server.address();

//   const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
// }
