"use strict";
let datafire = require('datafire');

let amazonaws_a4b = require('@datafire/amazonaws_a4b').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let getDeviceResponse = await Promise.all([].map(item => amazonaws_a4b.GetDevice({}, context)));
    return getDeviceResponse;
  },
});
