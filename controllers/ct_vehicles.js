const Vehicle = require("../models/vehicle");


module.exports = {
  signUp: async(req,res,next) => {
    res.json({"message":"User Controller signup called"});
  },
  addVehicle: async(req,res,next) => {
    const {modelName,modelYear,modelColor} = req.value.body;

    const vehicle = new Vehicle({
      vehicleModelName:modelName,
      vehicleModelYear:modelYear,
      vehicleModelColor:modelColor
    })

    vehicle.save()
      .then((data) => {
        res.json(data)
      })
  },
  getVehicles:async(req,res,next) => {
  //   Vehicle.find({},(err,vehicles) => {
  //     if(err){
  //       res.send(err)
  //     }
  //     res.json(vehicles)
  //   })
  // }
    Vehicle.find({})
      .limit(10)
      .exec((err,vehicles) => {
        res.status(200).json(vehicles)
      })

  }



}
