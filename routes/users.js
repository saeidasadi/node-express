const controller = require('../controllers/users');

const prefix = '/api/v1';

module.exports = (router) => {
    router.route(prefix + '/users')
        .get(controller.index)
        .post(controller.store);

    router.route(prefix + '/users/create')
        .get(controller.create);

    router.route(prefix + '/users/:id')
        .get(controller.show)
        .put(controller.update);

    router.route(prefix + '/users/:id/edit')
        .get(controller.edit);

    return router;
};