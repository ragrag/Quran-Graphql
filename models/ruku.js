const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rukuSchema = new Schema({
    _id:Number,
},{ collection : 'ruku' });

module.exports = mongoose.model('Ruku',rukuSchema);
