const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const sajdaSchema = new Schema({
	_id:Number,
	recommended:Number,
	obligatory:Number,
},{ collection : 'sajda' });

module.exports = mongoose.model('Sajda',sajdaSchema);
