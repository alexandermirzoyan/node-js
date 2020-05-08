const express = require("express");

const app = express();

// Setting ejs as view engine
app.set("view engine", "ejs");

// Setting static files like css
app.use('/public', express.static('public'));
// app.use('/assets', express.static('public'));

app.get("/", (req, res) => {
  res.render(`index`);
});

app.get("/about", (req, res) => {
  res.render('about');
});

app.get("/news/:id", (req, res) => {
  // render() finds files in views/ directory!!!
  let nestedObject = {
    name: "Poxos",
    surname: "Poxosyan",
    paragraphs: ["Paragraph", "Some other text", 124, 7],
  };

  let sendingData = {
    newsId: req.params.id,
    myStaticParam: "Barev dzez",
    nestedObject,
  };
  res.render('news', sendingData);
});

app.listen(3000);
console.log("Server successfully started!");