const db = require("../database/models");

const product = {
  allProducts: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        include: ["ProductCategory"],
      });
      res.render("./products/products", {
        styles: "styles-products.css",
        products,
      });
    } catch (error) {
      console.log(error);
    }
  },
  productDetails: async (req, res) => {
    try {
      const productToShow = await db.Product.findByPk(req.params.id);
      res.render("./products/productDetails", {
        styles: "styles-productDetails.css",
        productToShow,
      });
    } catch (error) {
      console.log(error);
    }
  },
  productCart: (req, res) => {
    res.render("./products/productCart", { styles: "styles-productCart.css" });
  },
};

module.exports = product;
