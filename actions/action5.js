"use strict";
let datafire = require('datafire');

let osf = require('@datafire/osf').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let wiki = await Promise.all([].map(item => osf.wiki_read({
      wiki_id: "",
    }, context)));
    return wiki;
  },
});
