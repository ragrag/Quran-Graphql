const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ayatSchema = new Schema({
    _id:Number,
    surat_id: Number,
    edition_id: Number,
    juz_id: Number,
    number: Number,
    text: String,
    numberinsurat: Number,
    manzil_id: Number,
    page_id: Number,
    ruku_id: Number,
    sajda_id: Number,
    hizbQuarter_id: Number,
},{ collection : 'ayat' });

module.exports = mongoose.model('Ayat',ayatSchema);
