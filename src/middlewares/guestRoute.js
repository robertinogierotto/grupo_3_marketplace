module.exports = (req, res, next) => {
  // si existe un usuario logueado
  if (req.session.user) {
    // Lo dejamos pasar
    res.redirect("/");
  } else {
    next();
  }
};
