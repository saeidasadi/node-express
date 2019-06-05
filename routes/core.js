const controller = require('../controllers/core');

module.exports = (router) => {
    router.route('/')
        .get(controller.index);

    return router;
};