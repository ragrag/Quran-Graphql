const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const suratSchema = new Schema({
    _id:Number,
    name:String,
    englishname:String,
    englishtranslation:String,
    revealationCity:String,
    numberOfAyats:Number,


},{ collection : 'surat' });

module.exports = mongoose.model('Surat',suratSchema);
