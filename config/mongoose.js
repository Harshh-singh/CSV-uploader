
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/CSV_Uploader');

const db = mongoose.connection;

db.on('error', console.log.bind(console, 'Error connecting to Mongodb'));

db.once('open', function(){
    console.log('Connected to Database :: Mongodb');
});

module.exports = db;