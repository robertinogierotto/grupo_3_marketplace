const express = require("express");
const router = express.Router();

const apiController = require("../controllers/apiController");

router.get("/products", apiController.getProducts);
router.get('/statics', apiController.getStatics);
router.get('/categoriesProducts', apiController.getCatAndProd);
router.get('/lastCreatedProduct', apiController.getLastProduct);
router.get('/productsAndClicks', apiController.getProductsAndClicks);
router.delete('/productsAndClicks', apiController.deleteClicksOnProducts);
router.get('/visitedPages', apiController.getVisitedPages);
router.delete('/visitedPages', apiController.deleteClicksOnPages);
router.get('/userStatics',apiController.getUserStatics);
router.delete('/userStatics', apiController.deleteUserStatics);



module.exports = router;

