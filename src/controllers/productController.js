const product = {
    productDetails: (req,res) => {
        res.render ('./products/productDetails', { styles: 'styles-productDetails.css'});
    },
    productCart: (req,res) => {
        res.render ('./products/productCart', { styles: 'styles-productCart.css'});
    },
}





module.exports = product;