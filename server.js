const http = require('http');
const {normalizePort} = require('./src/helpers/utils');
const {errorHandler} = require('./src/helpers/error');
const connection = require('./src/connection');
import app from './src/config/app'

connection.init();
// normalizes port
const PORT = normalizePort(process.env.Port || 8080);
app.set('port', PORT);

const server = http.createServer(app);
// handles errors
server.on('error', errorHandler);

// listens
server.listen(PORT, () => {
    console.log('listening on port: ' + PORT)
});

