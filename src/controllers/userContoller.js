const user = {
    login: (req,res) => {
        res.render ('login', { styles: 'styles-login.css'})
    },
    register: (req,res) => {
        res.render ('register', { styles: 'styles-register.css'})
    },
}
module.exports = user;