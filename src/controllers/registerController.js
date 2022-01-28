app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

const register = {
    register: (req,res) => {
        res.render ('register')
    }
}
module.exports = register;