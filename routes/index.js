const express = require('express');

const router = express.Router();

const users = require('./users');

const core = require('./core');

router.use('/api/v1', users(router));
router.use('/core', core(router));

module.exports = router;