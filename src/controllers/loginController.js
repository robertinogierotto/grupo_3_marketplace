app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

const login = {
    login: (req,res) => {
        res.render ('login')
    }
}
module.exports = login;