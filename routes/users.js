const controller = require('../controllers/users');

module.exports = (router) => {
    router.route('/users')
        .get(controller.index)
        .post(controller.store);

    router.route('users/:id')
        .get(controller.show);
};