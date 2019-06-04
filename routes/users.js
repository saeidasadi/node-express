const controller = require('../controllers/users');

module.exports = (router) => {
    router.route('/users')
        .get(controller.index)
        .post(controller.store);

    router.route('/users/create')
        .get(controller.create);

    router.route('/users/:id')
        .get(controller.show)
        .put(controller.update);

    router.route('/users/:id/edit')
        .get(controller.edit);
};