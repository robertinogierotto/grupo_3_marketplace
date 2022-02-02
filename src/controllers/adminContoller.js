const admin = {
    adminProducts: (req,res) => {
        res.render ('adminProducts', { styles: 'styles-adminProducts.css'})
    },
}
module.exports = admin;