// const fs = require('fs');
// const path = require('path');

// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const db = require('../database/models');

const admin = {
    adminIndex: (req,res) => {
        res.render ('./admin/adminIndex', { styles: 'styles-adminIndex.css'})
    },
    /*productsList: (req,res) => {
        res.render ('./admin/productsList', { styles: 'styles-productsList.css', products})
    }*/
    productsList: async (req,res) => {
        try {
            const products = await db.Product.findAll({include: ['ProductCategory']});
            res.render ('./admin/productsList', { styles: 'styles-productsList.css', products})
        } catch (error) {
            console.log(error)
        }

    },
    /*usersList: (req,res) => {
        res.render ('./admin/usersList', { styles: 'styles-usersList.css', users})
    },*/
    usersList: async (req,res) => {
        try {
            const users = await db.User.findAll({include: ['UserCategory']});
            res.render ('./admin/usersList', { styles: 'styles-usersList.css', users})
        } catch (error) {
            console.log(error)
        }
    },
    createProduct: (req,res) => {
        res.render ('./admin/createProduct', { styles: 'styles-createProduct.css'})
    },
    // addProduct:(req,res) => {
    //     let newProduct = {

    //         id: products[products.length - 1].id + 1,
    //         ...req.body,
    //         image: req.file.filename,
    //     };
    //     products.push (newProduct);
	// 	fs.writeFileSync(productsFilePath, JSON.stringify (products, null, ''));
    //     res.redirect ('/admin/productsList#' + newProduct.id);
    // },
    addProduct: async (req, res) => {
        try {
            const newProduct = await db.Product.create({
                
                ...req.body,
                image: req.file.filename
    
            })
            res.redirect ('/admin/productsList#' + newProduct.id); 
        } catch (error) {
            console.log(error);
        }
    },
    // editProduct: (req,res) => {
    //     let productToEdit = products.find( product => product.id == req.params.id)
    //     res.render ('./admin/editProduct', { styles: 'styles-editProduct.css', productToEdit})
    // },
    editProduct: async (req,res) => {
        try {

            let productToEdit = await db.Product.findByPk(req.params.id);
            res.render ('./admin/editProduct', { styles: 'styles-editProduct.css', productToEdit});

        } catch (error) {
            console.log(error);
        }
    },
    // saveProduct: (req,res) => {
    //     let productToEdit = products.find( product => product.id == req.params.id);

    //     productToEdit = {

    //         id: productToEdit.id,
    //         ...req.body,
    //         image: req.file ? req.file.filename : productToEdit.image,
    //     }
        
    //     let productsNew = products.map (product => {
    //         if (product.id == productToEdit.id) {
    //             return product = {...productToEdit};
    //         } return product;
    //     })
    //     fs.writeFileSync(productsFilePath, JSON.stringify (productsNew, null, ''));
    //     res.redirect ('/admin' )
    // },
    saveProduct: async (req,res) => {

        try {
            const productToEdit = await db.Product.findByPk(req.params.id);
            await db.Product.update(
                {
                ...req.body,
                image: req.file ? req.file.filename : productToEdit.image,   
                }, 
                {
                    where: {id: req.params.id}
                }
            );

            res.redirect ('/admin/productsList#' + productToEdit.id);
            
        } catch (error) {
           console.log(error); 
        }
    },
    // deleteProduct: (req,res) => {
    //     let productsNew = products.filter (product => product.id != req.params.id);
    //     fs.writeFileSync(productsFilePath, JSON.stringify (productsNew, null, ''));
    //     res.redirect ('/admin');
    // },
    deleteProduct: async (req,res) => {
        try {

            await db.Product.destroy({where: {id: req.params.id}, force: true})
            res.redirect('/admin/productsList');

        } catch (error) {
            console.log(error);
        }
    },
    // deleteUser: (req,res) => {
    //     let usersNew = users.filter (user => user.id != req.params.id);
    //     fs.writeFileSync(usersFilePath, JSON.stringify (usersNew, null, ''));
    //     res.redirect ('/admin');
    // },
    deleteUser: async (req,res) => {
        try {

            await db.User.destroy({where: {id: req.params.id}, force: true})
            res.redirect('/admin/UsersList');

        } catch (error) {
            console.log(error);
        }
    },
    // mkAdm: (req,res) => {
    //     let userToEdit = users.find (user => user.id == req.params.id);

    //     userToEdit.category === 'user' ? userToEdit.category = 'admin': userToEdit.category = 'user';

    //     let usersNew = users.map (user => {
    //         if (user.id == userToEdit.id) {
    //             return user = {...userToEdit};
    //         } return user;
    //     })
    //     fs.writeFileSync(usersFilePath, JSON.stringify (usersNew, null, ''));
    //     res.redirect ('/admin' );
    // }
    mkAdm: async (req,res) => {
        try {
            let userToEdit = await db.User.findByPk(req.params.id);
            await db.User.update(
                {
                    categoryId: userToEdit.categoryId === 1 ? userToEdit.categoryId = 2 : userToEdit.categoryId = 1
                }, 
                {
                    where: {id: req.params.id}
                }
            );
            res.redirect('/admin/UsersList');
        } catch (error) {
            console.log(error);
        }

    }
}




module.exports = admin;