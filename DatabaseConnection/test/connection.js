const mongoose = require('mongoose');

// Connect to mongodb
mongoose.connect('mongodb://localhost/mycustomers', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var customerSchema = new mongoose.Schema({
    first_name: String
});

var Customer = new mongoose.model('customers', customerSchema);