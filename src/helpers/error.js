exports.errorHandler = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    switch (error.code) {
        case 'EACCES':
            console.error('EACCES: ' + 'Requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error('EADDRINUSE: ' + 'Address is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};
