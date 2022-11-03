const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
    TopicName : {
        type : String,
        required : true
    },
    Content : {type : String},
    user : {
        type : mongoose.Schema.ObjectId,
        ref : 'User'
    },
    percent : {type : Number}
});

module.exports = mongoose.model('Topics' , TopicSchema);