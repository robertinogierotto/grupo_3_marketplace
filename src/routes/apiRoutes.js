const express = require("express");
const router = express.Router();

const apiController = require("../controllers/apiController");

router.get("/products", apiController.getProducts);
router.get('/statics', apiController.getStatics);
router.get('/categoriesProducts', apiController.getCatAndProd);
router.get('/lastCreatedProduct', apiController.getLastProduct);


module.exports = router;

