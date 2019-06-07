const controller = require('../controllers/chat');

const prefix= '/chat';

module.exports = (router) => {
    router.route(prefix + '/')
        .get(controller.index);

    return router;
};