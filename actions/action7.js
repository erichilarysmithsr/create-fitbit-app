"use strict";
let datafire = require('datafire');

let epa_gov_cwa = require('@datafire/epa_gov_cwa').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => epa_gov_cwa.rest_lookups.cwa_pollutants.get({}, context)));
    return result;
  },
});
