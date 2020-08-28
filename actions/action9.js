"use strict";
let datafire = require('datafire');

let mcw_edu = require('@datafire/mcw_edu').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => mcw_edu.getGeneAllelesUsingGET({
      rgdId: 0,
    }, context)));
    return result;
  },
});
