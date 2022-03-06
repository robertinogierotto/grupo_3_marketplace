const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const main = {
    home: (req,res) => {
        let productosEnOferta = products.filter (product => product.dailyOnSale == 0);
        res.render ('home', { styles: 'styles-home.css', productosEnOferta})
    },
    whoWeAre: (req,res) => {
        res.render ('whoWeAre', { styles: 'styles-whoWeAre.css'} )
    },
    contact: (req,res) => {
        res.render ('contact', { styles: 'styles-contact.css'} )
    }
}
module.exports = main;