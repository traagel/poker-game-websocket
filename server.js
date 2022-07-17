const fastify = require('fastify')();
const path = require('path');

fastify.register(require('fastify-favicon'));

fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/',
});

fastify.get('/', (request, reply) => {
    reply.sendFile('index.html');
});

// fastify.get('/public/js/game', (request, reply) => {
//     reply.sendFile('/public/js/game.js');
// });

fastify.get('/join', (request, reply) => {
    reply.sendFile('game.html');
});

fastify.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at: ${address}`);
});
