const admin = {
    adminProducts: (req,res) => {
        res.render ('./admin/adminProducts', { styles: 'styles-adminProducts.css'})
    },
    modifyProducts: (req,res) => {
        res.render ('./admin/modifyProducts', { styles: 'styles-modifyProducts.css'})
    }
}
module.exports = admin;