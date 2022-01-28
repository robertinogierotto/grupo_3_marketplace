app.get('/whoWeAre', (req,res)=>{
    res.sendFile(__dirname + '/views/whoWeAre.html');
});

const whoWeAre = {
    whoWeAre: (req,res) => {
        res.render ('whoWeAre')
    }
}
module.exports = whoWeAre;