const user = {
    login: (req,res) => {
        res.render ('./user/login', { styles: 'styles-login.css'})
    },
    register: (req,res) => {
        res.render ('./user/register', { styles: 'styles-register.css'})
    },
}
module.exports = user;