const express = require('express');
const router = express.Router()

const productController = require ('../controllers/productController');

router.get ('/productDetails', productController.productDetails); /* para los detalles de productos */
router.get ('/productCart', productController.productCart); /* para el carrito de compras */

module.exports = router;


