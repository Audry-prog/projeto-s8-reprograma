const express = require('express');
const route = express.Router();
const controller = require('../controller/musicasController');

route.get('/musicas', controller.getAllMusics);
route.get('/musicas/:banda', controller.getByBanda);
route.get('/musicas/single', controller.getMusicsSingle);
route.get('/musica/:id', controller.getMusicById);
route.get('/artistas', controller.getAllArtists);
route.get('/artista/:nome', controller.getArtistByName);
route.get('/gravadora', controller.getAllRecords);
route.get('/albuns/:titulo', controller.getAlbumByTitle);

module.exports = route;