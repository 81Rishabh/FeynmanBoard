const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fymanBoard" , {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.once('open' , () => {
    console.log('Connted to DB....✌️✌️');
});

db.on('error' , (err) => {
    console.error(err);
    console.log("Error in connecting....");
});
