const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

/* Muestra todos los productos */
router.get("/", productController.allProducts);
/* para los detalles de productos */
router.get("/details/:id", productController.productDetails);
/* para el carrito de compras */
router.get("/cart", productController.productCart);

module.exports = router;
