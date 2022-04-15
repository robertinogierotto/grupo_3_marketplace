// const fs = require('fs');
// const path = require('path');

const db = require('../database/models');

const main = {
    // home: (req,res) => {
    //     let productosEnOferta = products.filter (product => product.dailyOnSale == 0);
    //     res.render ('home', { styles: 'styles-home.css', productosEnOferta})
    // },
    home: async (req,res) => {
        let productosEnOferta = await db.Product.findAll({
            where: {
                dailyOnSale: 0
            },
            order: [
                ['discount', 'DESC']
            ]
        });
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