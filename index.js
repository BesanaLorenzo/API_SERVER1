const express = require("express");
const axios = require("axios");
var cors = require("cors");
const app = express();

app.use(cors());

//-- http://localhost:3000/
app.get("/", function (req, res) {
  res.send("Hello World");
});
//-- http://localhost:3000/somma?a=4&b=6
/*app.get('/somma', function (req, res) {
    let a=0
    let b=0
    a= req.query.a
    b= req.query.b
    c=a -(-b)
    console.log("Addizione: "+ c)
    res.send("Addizione: "+ c)
  })

  app.get('/sottrazione', function (req, res) {
    let a=0
    let b=0
    a= req.query.a
    b= req.query.b
    c=a-b
    console.log("Sottrazione: "+ c)
    res.send("Sottrazione: "+ c)
  })

  app.get('/moltiplicazione', function (req, res) {
    let a=0
    let b=0
    a= req.query.a
    b= req.query.b
    c=a *b
    console.log("Moltiplicazione: "+ c)
    res.send("Moltiplicazione: "+ c)
  })

  app.get('/divisione', function (req, res) {
    let a=0
    let b=0
    a= req.query.a
    b= req.query.b
    c=a / b
    console.log("Divisione: "+ c)
    res.send("Divisione: "+ c)
  })
*/

app.get("/somma", function (req, res) {
  res.send(JSON.stringify(req.query.a - -req.query.b));
});

app.get("/sottrazione", function (req, res) {
  res.send(JSON.stringify(req.query.a - req.query.b));
});
app.get("/moltiplicazione", function (req, res) {
  res.send(JSON.stringify(req.query.a * req.query.b));
});
app.get("/divisione", function (req, res) {
  res.send(JSON.stringify(req.query.a / req.query.b));
});

app.get("/meteo", function (req, res) {
  console.log("coordinate: ", req.query.lat, req.query.lon);
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        req.query.lat +
        "&lon=" +
        req.query.lon +
        "&appid=4be6fd6bf18450b4b2af7d9243be1cad"
    )
    .then(function (response) {
      console.log(response);
      res.send(response.data.weather[0].description)
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
});

app.listen(3000);
