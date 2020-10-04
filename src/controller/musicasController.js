const musicas = require('../model/musicas.json');
const artistas = require('../model/artistas.json');

const getAllArtists = (req, res) => {
    console.log(req.url);
    res.status(200).send(artistas);
}

const getArtistByName = (req, res) => {
    const artista = req.params.nome;
    const musicasFiltradasPorArtista = artistas.filter(
		(musica) => musica.artista.toUpperCase() == artista.toUpperCase()
);
    res.status(200).send(musicasFiltradasPorArtista)
};

const getByBand = (req, res) => {
    const banda = req.params.banda;
    const bandaFiltrada = musicas.filter((musica) => musica.banda.toUpperCase() == banda.toUpperCase()
    );
    res.status(200).send(bandaFiltrada);
}

const getAllMusics = (req, res) => {
    console.log(req.url);
    res.status(200).send(musicas);
}

const getAllBands = (req, res) => {
	const banda = musicas.map((musica) => musica.banda);
	res.status(200).send(banda);
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

const getAllAlbuns = (req, res) => {
	const albunsFiltrado = musicas.map((musica) => musica.album);
	res.status(200).send(albunsFiltrado);
};

const getAlbum = (req, res) => {
    const album = req.params.album;
	const albumFiltrado = musicas.filter((musica) => musica.album.toUpperCase() == album.toUpperCase());
	res.status(200).send(albumFiltrado);
};

const getAlbumByTitle = (req, res) => {
    const titulo = req.params.titulo;
    const musicasFiltradasPorAlbum = musicas.filter((musica) => musica.titulo.toUpperCase() == titulo.toUpperCase());
    const AlbumPorTitulo = musicasFiltradasPorAlbum.map((musica) => ({ "titulo": musica.titulo, "album": musica.album}));
    res.status(200).send(AlbumPorTitulo);
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
    getByBand,
    getAllBands, 
    getMusicsSingle, 
    getAllRecords,
    getAlbum,
    getAllAlbuns
};