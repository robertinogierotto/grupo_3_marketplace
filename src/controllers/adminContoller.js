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
    createProduct: (req,res) => {
        res.render ('./admin/createProduct', { styles: 'styles-createProduct.css'})
    },
    editProduct: (req,res) => {
        const productToEdit = products.find( product => product.id == req.params.id)
        res.render ('./admin/editProduct', { styles: 'styles-editProduct.css', productToEdit: productToEdit})
    },
    productsList: (req,res) => {
        res.render ('./admin/productsList', { styles: 'styles-productsList.css', products})
    },
    usersList: (req,res) => {
        res.render ('./admin/usersList', { styles: 'styles-usersList.css', users})
    }, 
}




module.exports = admin;