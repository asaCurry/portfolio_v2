
// require all dependencies
const express = require('express');
const app = express();
const axios = require('axios');

// set up the template engine
app.set('views', './views');
app.set('view engine', 'pug');


// GET response for '/'
app.get('/', function (req, res) {
    // render the 'index' template, and pass in a few variables
    const url = 'https://api.hubapi.com/hubdb/api/v2/tables/683481/rows/draft';
    axios.get(url, {
    params: {
      hapikey: '5660e8c7-016f-4ffb-a32f-55d0aee4b890'
    }
  })
    .then(response => {
      console.log("the request status is: " + response.status);

      let data = response.data.objects;
      let cityList =[];

      data.map((city) => {
        cityList.push(city.name)
      })
      res.render('index', {
        title: 'Hey',
        message: 'Hello there!',
        cities: cityList
      })

    })
    .catch(error => {
      console.log(error);
    });
});


app.get('/home', function (req, res) {
    // render the 'index' template, and pass in a few variables
    res.render('index', {
      title: 'Home',
      message: 'Hello there!',
    })
});
// start up the server
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});
