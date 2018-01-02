const express = require('express');

const router = require('express-promise-router')();

const { validateBody, schemas } = require('../helpers/routeHelpers');
const VehicleController = require('../controllers/ct_vehicles');


router.route('/signup')
  .post(validateBody(schemas.authSchema),VehicleController.signUp);

  router.route('/')
    .post(validateBody(schemas.vehicleSchema),VehicleController.addVehicle)

  router.route('/')
      .get(VehicleController.getVehicles)

module.exports = router;
