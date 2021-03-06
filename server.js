const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect('mongodb://localhost/kudos', { useNewUrlParser: true });
require('./routes/api-routes')(app);



///listen to the port
app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});