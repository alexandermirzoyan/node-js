var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err
  }
  var dbo = db.db("mydb");

  // creates empty collection
  /*dbo.createCollection("customers", (err, res) => {
    if (err) throw err;
    console.log("Collection created");
    db.close();
  })*/

  // inserts one document
  /*var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, (err, res) => {
    if (err) {
      throw err;
    }
    console.log(res);
    console.log("1 document inserted");
    db.close();
  })*/


  // inserts many documents
  /*const myObjects = [
    { name: "Company Inc", address: "Highway 37" },
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];

  dbo.collection("customers").insertMany(myObjects, (err, res) => {
    if (err) {
      throw err;
    }
    console.log(`Number of documents inserted: ${res.insertedCount}`);
    db.close();
  })*/

  // inserts many documents with specific _id
  /*const myobj = [
    { _id: 154, name: 'Chocolate Heaven'},
    { _id: 155, name: 'Tasty Lemon'},
    { _id: 156, name: 'Vanilla Dream'}
  ];

  dbo.collection("products").insertMany(myobj, (err, res) => {
    if (err) {
      throw err;
    }
    console.log(res);
    db.close();
  })*/
});