const express = require('express');
const router  = express.Router();
const spotifyApi = require('../spotify');

router.get('/albums/tracks/:id', (req, res) => {
    const albumId = req.params.id;
    spotifyApi.getAlbumTracks(albumId)
    .then(data => {
        res.render("tracks", {tracks : data})
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router