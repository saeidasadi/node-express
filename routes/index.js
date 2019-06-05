const express = require('express');

const router = express.Router();

const users = require('./users');

router.use('/api/v1', users(router));

module.exports = router;