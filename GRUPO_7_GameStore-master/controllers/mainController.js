const controller = {
    home: (req, res) => {
        return res.render('home');
    },
    register: (req, res) => {
        return res.render('register');
    },
    login: (req, res) => {
        return res.render('login');
    },
    cart: (req, res) => {
        return res.render('productCart');
    },
    detail: (req, res) => {
        return res.render('productDetail');
    },
    adminNewProduct: (req, res) => {
        return res.render('adminNewProduct');
    },
    adminEditProduct: (req, res) => {
        return res.render('adminEditProduct');
    }
}

module.exports = controller;