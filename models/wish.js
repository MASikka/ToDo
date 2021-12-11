const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wishSchema = new Schema({
    date: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    }

});
mongoose.model('Wish', wishSchema);