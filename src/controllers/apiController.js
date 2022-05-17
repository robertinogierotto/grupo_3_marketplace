const db = require("../database/models");
const { Sequelize } = require("../database/models");


const apiController = {
    getProducts: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                include: {all: true},
            });

            let response = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: "api/products",
                },
                data: products,
            };

            res.json(response);

            //await db.ClicksByProduct.increment('numberOfClicks', {by: 1, where: {id: 1}});

        } catch (error) {
            console.log(error);
        }
    },
    getStatics: async (req, res) => {
        try {
            const products = await db.Product.findAndCountAll();
            const categories = await db.ProductCategory.findAndCountAll();
            const users = await db.User.findAndCountAll();

            let response = {
                meta: {
                    status: 200,
                    url: "api/statics",
                },
                productsCount: products.count,
                categoriesCount: categories.count,
                usersCount: users.count,
            };

            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    getCatAndProd: async (req, res) => {
        try {
            const products = await db.Product.findAll();

            let gamerProducts = products.filter(
                (product) => product.productsCategoryId == 1
            );
            let videoProducts = products.filter(
                (product) => product.productsCategoryId == 2
            );
            let phoneProducts = products.filter(
                (product) => product.productsCategoryId == 3
            );

            let response = {
                meta: {
                    status: 200,
                    url: "api/statics",
                },
                data: [
                    {
                        categoryName: "Gamer",
                        products: gamerProducts.length
                    },
                    {
                        categoryName: "Video",
                        products: videoProducts.length
                    },
                    {
                        categoryName: "Celulares",
                        products: phoneProducts.length
                    }
                ]
            };

            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    getLastProduct: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                include: ["ProductCategory"],
            });

            let lastCreatedProduct = products.reduce((max, product) => max.id > product.id ? max : product);

            let response = {
                meta: {
                    status: 200,
                    url: "api/lastCreatedProduct",
                },
                data: lastCreatedProduct,
            };

            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    getProductsAndClicks: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                include: {all: true},
                order: [[Sequelize.literal('clicksbyproduct.numberOfClicks DESC LIMIT 6')]]
            });

            let response = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: "api/products",
                },
                data: products,
            };

            res.json(response);

            //await db.ClicksByProduct.increment('numberOfClicks', {by: 1, where: {id: 1}});

        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = apiController;
