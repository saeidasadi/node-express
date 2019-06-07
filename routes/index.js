const express = require('express');

const router = express.Router();

require('./users')(router);
require('./core')(router);

module.exports = router;