const db = require('../database/models');

const main = {
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
    },
    sendEmail: (req,res) => {
        console.log(req.body)
    } 
}
module.exports = main;