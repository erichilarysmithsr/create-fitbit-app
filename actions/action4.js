"use strict";
let datafire = require('datafire');

let google_genomics = require('@datafire/google_genomics').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => google_genomics.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
