"use strict";
let datafire = require('datafire');

let lyft = require('@datafire/lyft').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => lyft.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
