app.get('/productCart', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});

const productCart = {
    productCart: (req,res) => {
        res.render ('productCart')
    }
}
module.exports = productCart;