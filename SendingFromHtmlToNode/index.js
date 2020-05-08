const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlEncodedParser = bodyParser.urlencoded({extended: false});

// Setting ejs as view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render('index')
})

app.get("/about", (req, res) => {
  res.render('about')
})

app.post("/about", urlEncodedParser, (req, res) => {
  // if request is empty set 400 statusCode
  if (!req.body) {
    res.sendStatus(400);
  }
  console.log(req.body);
  let sendingData = {
    data: req.body,
  }
  res.render('about-success', {data: req.body})
})

app.listen(3000);
console.log("Server successfully started");