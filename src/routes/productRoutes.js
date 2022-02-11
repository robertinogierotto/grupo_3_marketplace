const express = require('express');
const router = express.Router()

const productController = require ('../controllers/productController');

router.get ('/details/:id', productController.productDetails); /* para los detalles de productos */
router.get ('/cart', productController.productCart); /* para el carrito de compras */

module.exports = router;


