app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

const home = {
    home: (req,res) => {
        res.render ('home')
    }
}
module.exports = home;