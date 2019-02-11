const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hizbQuarterSchema = new Schema({
    _id:Number,
},{ collection : 'hizb_quarter' });

module.exports = mongoose.model('Hizb_Quarter',hizbQuarterSchema);
