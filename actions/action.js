"use strict";
let datafire = require('datafire');

let google_bigquery = require('@datafire/google_bigquery').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let table = await Promise.all([].map(item => google_bigquery.tables.get({
      datasetId: "",
      projectId: "",
      tableId: "",
    }, context)));
    return table;
  },
});
