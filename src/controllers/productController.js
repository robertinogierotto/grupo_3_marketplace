const { sequelize } = require("../database/models");
const db = require("../database/models");
const Op = db.Sequelize.Op;


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
  productSearch: async (req, res) => {
    try {
      let search = req.query.search;

      let products = await db.Product.findAll({
        where: {
          [Op.or]: [
            { name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + search.toLowerCase() + '%') },
            { description: sequelize.where(sequelize.fn('LOWER', sequelize.col('description')), 'LIKE', '%' + search.toLowerCase() + '%') },
            { caract1: sequelize.where(sequelize.fn('LOWER', sequelize.col('caract1')), 'LIKE', '%' + search.toLowerCase() + '%') },
            { caract2: sequelize.where(sequelize.fn('LOWER', sequelize.col('caract2')), 'LIKE', '%' + search.toLowerCase() + '%') },
            { caract3: sequelize.where(sequelize.fn('LOWER', sequelize.col('caract3')), 'LIKE', '%' + search.toLowerCase() + '%') },
            { caract4: sequelize.where(sequelize.fn('LOWER', sequelize.col('caract4')), 'LIKE', '%' + search.toLowerCase() + '%') }
          ]
        }
      })

      res.render("./products/productSearch", {
        styles: "styles-productSearch.css",
        products,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = product;
