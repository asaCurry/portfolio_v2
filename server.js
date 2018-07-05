
// require all dependencies
const express = require('express');
const app = express();
const axios = require('axios');

// set up the template engine
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));


// Views
app.get('/', function (req, res) {

res.render('layout', {

  });
});


app.get('/home', function (req, res) {

    res.render('layout', {

    })
});
// start up the server
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});
