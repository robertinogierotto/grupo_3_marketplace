module.exports = (req, res, next) => {
    // Si existe el usuario en session
    if (req.session.user && req.session.user.category == 'admin') {
        // Lo dejamos pasar
        
        next();
    } else {
        res.redirect('/');

    }
};