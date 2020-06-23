"use strict";
let datafire = require('datafire');

let healthcare_gov = require('@datafire/healthcare_gov').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let glossaryList = await Promise.all([].map(item => healthcare_gov.api.glossarymediaTypeExtension.get({
      mediaTypeExtension: ".json",
    }, context)));
    return glossaryList;
  },
});
