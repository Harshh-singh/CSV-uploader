require('dotenv').config();

const express = require('express');
const port = process.env.Port;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);

app.use(express.static('./assets/dest'));

app.use(expressLayouts);

app.use('/', require('./routes/index'));


app.listen(port, function(err){

    if(err){
        console.log(`Error in running server: ${err}`)
    }

    console.log(`Server is running on port: ${port}`);
});