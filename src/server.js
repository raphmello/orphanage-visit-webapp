// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

// iniciando o express
const server = express();

// utilizar body da req
server.use(express.urlencoded({ extended: true }));

// criando rotas para os arquivos estáticos
server.use(express.static('public'));

// configurar template engine
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

// criar rotas da aplicação
server.get('/', pages.index);
server.get('/orphanages', pages.orphanages);
server.get('/orphanage', pages.orphanage);
server.get('/create-orphanage', pages.createOrphanage);
server.post('/save-orphanage',pages.saveOrphanage);

// ligar o servidor
server.listen(5500);