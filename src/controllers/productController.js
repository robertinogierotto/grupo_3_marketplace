const { sequelize } = require("../database/models");
const db = require("../database/models");
const Op = db.Sequelize.Op;


const product = {
  allProducts: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        include: ["ProductCategory"],
      });
      let phones = products.filter (product => product.productsCategoryId == 3);
      let video = products.filter (product => product.productsCategoryId == 2);
      let gamer = products.filter (product => product.productsCategoryId == 1);

      res.render("./products/products", {
        styles: "styles-products.css",
        phones,
        video,
        gamer
      });
      await db.VisitedPage.increment('numberOfVisits', {by: 1, where: {page: 'Productos'}});
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
      await db.ClicksByProduct.increment('numberOfClicks', {by: 1, where: {id: req.params.id}});
      await db.VisitedPage.increment('numberOfVisits', {by: 1, where: {page: 'Detalle de Productos'}});
    } catch (error) {
      console.log(error);
    }
  },
  productCart: async (req, res) => {
    res.render("./products/productCart", { styles: "styles-productCart.css" });
    await db.VisitedPage.increment('numberOfVisits', {by: 1, where: {page: 'Carrito de Compras'}});
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
