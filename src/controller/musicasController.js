const musicas = require('../model/musicas.json');
const artistas = require('../model/artistas.json');

const getAllArtists = (req, res) => {
    console.log(req.url);
    res.status(200).send(artistas);
}

const getArtistByName = (req, res) => {
    const artista = req.params.nome;
    const musicasFiltradasPorArtista = artistas.filter((musica) => musica.artista == artista);
    res.status(200).send(musicasFiltradasPorArtista)
};

const getByBanda = (req, res) => {
    const banda = req.params.banda;
    const bandaFiltrada = musicas.filter((musica) => musica.banda == banda);
    res.status(200).send(bandaFiltrada);
}

const getAllMusics = (req, res) => {
    console.log(req.url);
    res.status(200).send(musicas);
}

const getMusicById = (req, res) => {
    const id = req.params.id;
    const musicaFiltrada = musicas.find((musica) => musica.id == id);
    res.status(200).send(musicaFiltrada);
}

const getMusicsSingle = (req, res) => {
    const musicasFiltradasPorSingle = musicas.filter((musica) => musica.single === true);
    const bandasSingle = musicasFiltradasPorSingle.map((musica) => ({"banda": musica.banda, "titulo": musica.titulo}));
    res.status(200).send(bandasSingle);
}

const getAlbumByTitle = (req, res) => {
    const album = req.params.titulo;
    const musicasFiltradasPorAlbum = musicas.filter((musica) => musica.album == album);
    res.status(200).send(musicasFiltradasPorAlbum);
}

const getAllRecords = (req, res) => {
    const gravadora = musicas.map((musica) => musica.gravadora);
    res.status(200).send(gravadora);
}

module.exports = { 
    getAlbumByTitle, 
    getAllMusics, 
    getMusicById, 
    getAllArtists, 
    getArtistByName, 
    getByBanda, 
    getMusicsSingle, 
    getAllRecords
};