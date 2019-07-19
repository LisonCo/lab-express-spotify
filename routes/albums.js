const express = require('express');
const router  = express.Router();
const spotifyApi = require('../spotify');

router.get('/albums/:id', (req, res) => {
    const artistId = req.params.id;
    spotifyApi.getArtistAlbums(artistId)
    .then(data => {
        res.render("albums", {albums : data})
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router
