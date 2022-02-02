const product = {
    productDetails: (req,res) => {
        res.render ('productDetails', { styles: 'styles-productDetails.css'});
    },
    productCart: (req,res) => {
        res.render ('productCart', { styles: 'styles-productCart.css'});
    },
}





module.exports = product;