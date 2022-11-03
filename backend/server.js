const express = require('express');
const app  = express();
const port = 5000;
require('./config/db');
const cors = require('cors');

app.use(express.urlencoded({extended : false}));
app.use(express.json());

// cors middileware
app.use(cors());

app.use('/' , require('./routes'));

app.listen(port , () => {
    console.log('listening on port ' + port);
});