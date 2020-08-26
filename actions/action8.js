"use strict";
let datafire = require('datafire');

let epa_gov_sdw = require('@datafire/epa_gov_sdw').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => epa_gov_sdw.sdw_rest_services.metadata.get({}, context)));
    return result;
  },
});
