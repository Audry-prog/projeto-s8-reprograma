const express = require('express');
const route = express.Router();
const controller = require('../controller/musicasController');

route.get('/musicas', controller.getAllMusics);
route.get('/musicas/:banda', controller.getByBand);
route.get('/banda', controller.getAllBands);
route.get('/musica/:id', controller.getMusicById);
route.get('/artistas', controller.getAllArtists);
route.get('/artista/:nome', controller.getArtistByName);
route.get('/gravadoras', controller.getAllRecords);
route.get('/gravadora/:nome', controller.getRecordByName);
route.get('/album', controller.getAllAlbuns);
route.get('/musicas/album/:album', controller.getAlbum);
route.get('/albuns/:titulo', controller.getAlbumByTitle);
route.get('/single', controller.getMusicsSingle);
route.get('/series', controller.getAllSeries);
route.get('/serie/:id', controller.getSerieById);
route.get('/:titulo', controller.getSerieByTitulo);

module.exports = route;