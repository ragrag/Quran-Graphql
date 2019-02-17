const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const manzilSchema = new Schema({
	_id:Number,
},{ collection : 'manzil' });

module.exports = mongoose.model('Manzil',manzilSchema);
