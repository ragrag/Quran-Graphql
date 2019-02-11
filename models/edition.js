const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const editionSchema = new Schema({
    _id:Number,
    identifier:String,
    language:String,
    englishname:String,
    format:String,
    type:String,
    media:String,
    source:String,
    lastupdated:String,
    name:String,
},{ collection : 'edition' });

module.exports = mongoose.model('Edition',editionSchema);
