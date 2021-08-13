const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/register', mainController.register);
router.get('/login', mainController.login);
router.get('/cart', mainController.cart);
router.get('/detail', mainController.detail);


// ADMINISTRADOR
router.get('/adminNewProduct', mainController.adminNewProduct);
router.get('/tlou/adminEditProduct', mainController.adminEditProduct);

module.exports = router;