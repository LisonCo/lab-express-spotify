require('dotenv').config()

const express = require('express');
const hbs = require('hbs');
const SpotifyWebApi = require('spotify-web-api-node');



const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


const index = require('./routes/index');
app.use('/', index);
const artists = require('./routes/artists');
app.use('/', artists);
const albums = require('./routes/albums');
app.use('/', albums);
const tracks = require('./routes/tracks');
app.use('/', tracks)


module.exports = app;



app.listen(3000, () => console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊"));
