"use strict";
let datafire = require('datafire');

let walmart_order = require('@datafire/walmart_order').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => walmart_order.getAllOrders({
      Accept: "application/xml",
      'WM_CONSUMER.CHANNEL.TYPE': "SWAGGER_CHANNEL_TYPE",
      'WM_CONSUMER.ID': "",
      'WM_SEC.TIMESTAMP': "",
      'WM_SEC.AUTH_SIGNATURE': "",
      'WM_SVC.NAME': "Walmart Marketplace",
      'WM_QOS.CORRELATION_ID': "",
      sku: "",
      customerOrderId: "",
    }, context)));
    return result;
  },
});
