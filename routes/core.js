const controller = require('../controllers/core');

const prefix = '/core';

module.exports = (router) => {
    router.route(prefix + '/')
        .get(controller.index);

    return router;
};