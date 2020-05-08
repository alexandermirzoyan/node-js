const express = require("express");

const app = express();

// Setting ejs as view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${__dirname}/about.html`);
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