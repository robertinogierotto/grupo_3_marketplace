const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const admin = {
    adminIndex: (req,res) => {
        res.render ('./admin/adminIndex', { styles: 'styles-adminIndex.css'})
    },
    productsList: (req,res) => {
        res.render ('./admin/productsList', { styles: 'styles-productsList.css', products})
    },
    usersList: (req,res) => {
        res.render ('./admin/usersList', { styles: 'styles-usersList.css', users})
    }, 
    createProduct: (req,res) => {
        res.render ('./admin/createProduct', { styles: 'styles-createProduct.css'})
    },
    addProduct:(req,res) => {
        let newProduct = {

            id: products[products.length - 1].id + 1,
            ...req.body,
            image: req.file.filename,
        };
        products.push (newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify (products, null, ''));
        res.redirect ('/admin/productsList#' + newProduct.id);
    },
    editProduct: (req,res) => {
        let productToEdit = products.find( product => product.id == req.params.id)
        res.render ('./admin/editProduct', { styles: 'styles-editProduct.css', productToEdit})
    },
    saveProduct: (req,res) => {
        let productToEdit = products.find( product => product.id == req.params.id);

        productToEdit = {

            id: productToEdit.id,
            ...req.body,
            image: req.file ? req.file.filename : productToEdit.image,
        }
        
        let productsNew = products.map (product => {
            if (product.id == productToEdit.id) {
                return product = {...productToEdit};
            } return product;
        })
        fs.writeFileSync(productsFilePath, JSON.stringify (productsNew, null, ''));
        res.redirect ('/admin' )
    },
    deleteProduct: (req,res) => {
        let productsNew = products.filter (product => product.id != req.params.id);
        fs.writeFileSync(productsFilePath, JSON.stringify (productsNew, null, ''));
        res.redirect ('/admin');
    }
}




module.exports = admin;