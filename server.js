'use strict'
const Restify = require('restify');
const server = Restify.createServer({
	name: 'VanillaMessenger',
});

const PORT = process.env.PORT || 3000;

const config = require('./config');

server.get('/' , (req,res, next) => {
	res.send("Hello");
	return next();
});

server.listen(PORT, () => console.log(`Vanillia running on port ${PORT}`));