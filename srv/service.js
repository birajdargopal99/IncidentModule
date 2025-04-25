const cds = require("@sap/cds");
const cov2ap = require("@cap-js-community/odata-v2-adapter");
cds.on ("bootstrap",(app) => app._router(cov2ap()));
module.exports = cds.server;