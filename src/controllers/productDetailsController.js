app.get('/productDetails', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetails.html');
});