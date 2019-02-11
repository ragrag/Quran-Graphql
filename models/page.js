const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
    _id:Number,
},{ collection : 'page' });

module.exports = mongoose.model('Page',pageSchema);
