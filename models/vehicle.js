const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
	vehicleModelName:{
		type:String,
		required:true
	},
	vehicleModelYear:{
		type:Number,
		required:true
	},
	vehicleModelColor:{
		type:String,
		required:true
	}
})

const Vehicle = mongoose.model("vehicles",vehicleSchema);
module.exports = Vehicle;
