"use strict";
let datafire = require('datafire');

let slack = require('@datafire/slack').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => slack.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
