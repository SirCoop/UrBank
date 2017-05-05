const Koa         = require('koa');
const app         = new Koa();
const serve       = require('koa-static');
const config      = require('./config.js');

// Static content
app.use(serve(__dirname + '/webapp'));

app.listen(config.koa.port);
console.log('__dirname: ', __dirname + '\\webapp');
console.log('listening on port: 1213');