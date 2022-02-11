const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const product = {
    productDetails: (req,res) => {
        const productToShow = products.find( product => product.id == req.params.id)
        res.render ('./products/productDetails', { styles: 'styles-productDetails.css', productToShow});
    },
    productCart: (req,res) => {
        res.render ('./products/productCart', { styles: 'styles-productCart.css'});
    },
}





module.exports = product;