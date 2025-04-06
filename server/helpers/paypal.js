const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ASpu6PU2oQcK2b8O36Bv0HXEuBalVkPZ0tlbm5jlNQuwa0GUR0DZhNtCbXDOgZ2rbm2Vbv1RYZPme-NP",
  client_secret: "ENe89NbZjfgeQ1IbCBHqjHarXmtllwbMA5Fo5t1k5p2TWzxWn7IosWCCPwABHCdXhWrbPrNo-g-My-Ig",
});

module.exports = paypal;
