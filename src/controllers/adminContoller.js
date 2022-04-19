const db = require("../database/models");

const admin = {
  adminIndex: (req, res) => {
    res.render("./admin/adminIndex", { styles: "styles-adminIndex.css" });
  },
  productsList: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        include: ["ProductCategory"],
      });
      res.render("./admin/productsList", {
        styles: "styles-productsList.css",
        products,
      });
    } catch (error) {
      console.log(error);
    }
  },
  usersList: async (req, res) => {
    try {
      const users = await db.User.findAll({ include: ["UserCategory"] });
      res.render("./admin/usersList", {
        styles: "styles-usersList.css",
        users,
      });
    } catch (error) {
      console.log(error);
    }
  },
  createProduct: (req, res) => {
    res.render("./admin/createProduct", { styles: "styles-createProduct.css" });
  },
  addProduct: async (req, res) => {
    try {
      const newProduct = await db.Product.create({
        ...req.body,
        image: req.file.filename,
      });
      res.redirect("/admin/productsList#" + newProduct.id);
    } catch (error) {
      console.log(error);
    }
  },
  editProduct: async (req, res) => {
    try {
      let productToEdit = await db.Product.findByPk(req.params.id);
      res.render("./admin/editProduct", {
        styles: "styles-editProduct.css",
        productToEdit,
      });
    } catch (error) {
      console.log(error);
    }
  },
  saveProduct: async (req, res) => {
    try {
      const productToEdit = await db.Product.findByPk(req.params.id);
      await db.Product.update(
        {
          ...req.body,
          image: req.file ? req.file.filename : productToEdit.image,
        },
        {
          where: { id: req.params.id },
        }
      );

      res.redirect("/admin/productsList#" + productToEdit.id);
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await db.Product.destroy({ where: { id: req.params.id }, force: true });
      res.redirect("/admin/productsList");
    } catch (error) {
      console.log(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await db.User.destroy({ where: { id: req.params.id }, force: true });
      res.redirect("/admin/UsersList");
    } catch (error) {
      console.log(error);
    }
  },
  mkAdm: async (req, res) => {
    try {
      let userToEdit = await db.User.findByPk(req.params.id);
      await db.User.update(
        {
          categoryId:
            userToEdit.categoryId === 1
              ? (userToEdit.categoryId = 2)
              : (userToEdit.categoryId = 1),
        },
        {
          where: { id: req.params.id },
        }
      );
      res.redirect("/admin/UsersList");
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = admin;
