const express = require("express");
const router = express.Router();

const apiController = require("../controllers/apiController");

router.get("/products", apiController.getProducts);
router.get('/statics', apiController.getStatics);
router.get('/categoriesProducts', apiController.getCatAndProd);
router.get('/lastCreatedProduct', apiController.getLastProduct);
router.get('/productsAndClicks', apiController.getProductsAndClicks);


module.exports = router;

