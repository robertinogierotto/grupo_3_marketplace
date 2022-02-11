const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));





const main = {
    home: (req,res) => {
        res.render ('home', { styles: 'styles-home.css', productosEnOferta: products})
    },
    whoWeAre: (req,res) => {
        res.render ('whoWeAre', { styles: 'styles-whoWeAre.css'} )
    },
}





module.exports = main;