module.exports = (req, res, next) => {
  // si existe un usuario logueado
  if (req.session.user) {
    // Lo dejamos pasar

    next();
  } else {
    res.redirect("/user/login");
  }
};
