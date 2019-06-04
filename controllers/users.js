module.exports = {
    index: (req, res) => {
        res.send('UsersController@index');
    },

    create: (req, res, next) => {
        console.log('Api: Users@Create');

        res.send('UsersController@create');
    },

    store: (req, res) => {
        res.send('UsersController@store')
    },

    edit: (req, res) => {
        res.send('UsersController@edit')
    },

    update: (req, res) => {
        res.send('UsersController@update')
    },

    show: (req, res) => {
        res.send('UsersController@show');
    },

    destroy: (req, res) => {
        res.send('UsersController@destroy')
    },
};