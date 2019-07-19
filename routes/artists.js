const express = require('express');
const router  = express.Router();
const spotifyApi = require('../spotify');

router.get('/artists', (req, res, next) => {
    const searchedArtist = req.query.artist;
    spotifyApi.searchArtists(searchedArtist)
    .then(data => {
      for (let artist of data.body.artists.items){
        artist.id = artist.uri.split(":")[2];
      }
      res.render("artists", {artists : data.body.artists})
    })
    .catch(err => {
      console.log("The error while searching artists occurred: ", err);
    })

});

module.exports = router;

