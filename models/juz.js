const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const juzSchema = new Schema({
    _id:Number,
},{ collection : 'juz' });

module.exports = mongoose.model('Juz',juzSchema);
