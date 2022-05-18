const db = require("../database/models");
const { Sequelize, sequelize } = require("../database/models");


const apiController = {
    getProducts: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                include: { all: true },
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
                    url: "api/categoriesProducts",
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
                include: { all: true },
                order: [[Sequelize.literal('clicksbyproduct.numberOfClicks DESC LIMIT 6')]]
            });

            let response = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: "api/productsAndClicks",
                },
                data: products,
            };

            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    getVisitedPages: async (req, res) => {
        try {
            const products = await db.VisitedPage.findAll({
                order: [[Sequelize.literal('numberOfVisits DESC')]]
            });

            let response = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: "api/visitedPages",
                },
                data: products,
            };

            res.json(response);

        } catch (error) {
            console.log(error);
        }
    },
    getUserStatics: async (req, res) => {
        try {
            const users = await db.User.findAll();
            const loggedUsers = await db.LoggedUser.findByPk(1);
            const comments = await db.SendedComment.findByPk(1);
            const newUsers = await db.NewUser.findByPk(1);

            let response = {
                meta: {
                    status: 200,
                    url: "api/userStatics",
                },
                data: {
                    totalUsers: users.length,
                    loggedUsers: loggedUsers.numberOfUsers,
                    comments: comments.numberOfComments,
                    newUsers: newUsers.numberOfNewUsers
                }
            };

            res.json(response);

        } catch (error) {
            console.log(error);
        }
    },
    deleteClicksOnProducts: async (req, res) => {
        try {
            await db.ClicksByProduct.update({numberOfClicks: 0},{
                where: {}
            })
            
            let currentDate = 'update clicksbyproducts set lastRestarted =' + ' ' + '"' +new Date().toLocaleString() + "" + '"';
            await sequelize.query(currentDate);

            let response = {
                meta: {
                    status: 200,
                    url: 'api/productsAndClicks',
                    method: 'Delete'
                }
            };
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    deleteClicksOnPages: async (req, res) => {
        try {
            await sequelize.query('update visitedpages set numberOfVisits = 0');

            let currentDate = 'update visitedpages set lastRestarted =' + ' ' + '"' +new Date().toLocaleString() + "" + '"';
            await sequelize.query(currentDate);
            
            let response = {
                meta: {
                    status: 200,
                    url: 'api/visitedPages',
                    method: 'Delete'
                }
            };
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    deleteUserStatics: async (req, res) => {
        try {
            await sequelize.query('update loggedusers set numberOfUsers = 0');
            await sequelize.query('update sendedcomments set numberOfComments = 0');
            await sequelize.query('update newusers set numberOfNewUsers = 0');

            let currentDate = 'update loggedusers set lastRestarted =' + ' ' + '"' +new Date().toLocaleString() + "" + '"';
            await sequelize.query(currentDate);
            
            let response = {
                meta: {
                    status: 200,
                    url: 'api/userStatics',
                    method: 'Delete'
                }
            };
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }
    
};

module.exports = apiController;
