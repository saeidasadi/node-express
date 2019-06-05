module.exports = {
    index: (req, res) => {
        let data = {
            title: "Core Index",
            message: "Hello Dear User",
        };

        res.render('core/index', data);
    },
};