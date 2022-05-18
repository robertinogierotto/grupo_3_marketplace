const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");

const user = {
  login: async (req, res) => {
    res.render("./user/login", { styles: "styles-login.css" });
    await db.VisitedPage.increment('numberOfVisits', {by: 1, where: {page: 'Login'}});
  },
  authenticate: async (req, res) => {
    try {
      //recuperamos los datos ingresados por el usuario
      const { email, password } = req.body;
      // buscamos el email ingresado en la db

      let user = await db.User.findOne({ where: { email: email } });

      //si lo encuentra
      if (user) {
        // check la password
        if (bcrypt.compareSync(password, user.password)) {
          // Eliminamos la pass para no dejarla a la vista
          delete user.dataValues.password;
          //Guardamos el usuario en session
          req.session.user = user;

          // Si clickea el checkbox remember
          if (req.body.remember) {
            // Generamos un token seguro, eso para que no pueda entrar cualquiera --> https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js

            const token = crypto.randomBytes(64).toString("base64");
            user.token = token;

            // Lo guardamos en base, para poder chequearlo luego
            let userLoginInfo = {
              token: user.token,
              userId: user.id,
            };
            await db.UserLog.create(userLoginInfo);

            // Recordamos al usuario por 3 meses         msegs  segs  mins  hs   días
            res.cookie("rememberToken", token, {
              maxAge: 1000 * 60 * 60 * 24 * 90,
            });
          }

          // Finalmente lo mandamos a la home o a la pagina de administrador si es un admin
          await db.LoggedUser.increment('numberOfUsers', {by: 1, where: {id: 1}});
          if (req.session.user.categoryId == 2) {
            return res.redirect("/admin");
          } else {
            return res.redirect("/");
          }
        } else {
          // Si la contraseña esta mal
          return res.render("./user/login", {
            old: req.body,
            errors: {
              email: "La contraseña es incorrecta, intente nuevamente",
            },
            styles: "styles-login.css",
          });
        }
      } else {
        // Si el email no existe
        return res.render("./user/login", {
          old: req.body,
          errors: {
            email: "El email no existe, ingrese nuevamente su email",
          },
          styles: "styles-login.css",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  logout: async (req, res) => {
    // Nos fijamos si en la base de datos tenemos un usuario con el token
    //SI EXISTE EL TOKEN EN COOKIE, EXISTE EN LA BD
    //Si existe, lo borramos
    try {
      if (req.cookies.rememberToken) {
        await db.UserLog.destroy({
          where: { token: req.cookies.rememberToken },
          force: true,
        });
      }
      // Destruimos la sesión
      req.session.destroy();

      // Destruimos la cookie de recordar
      res.clearCookie("rememberToken");

      // Redirigimos a la home
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },
  register: async (req, res) => {
    res.render("./user/register", { styles: "styles-register.css" });
    await db.VisitedPage.increment('numberOfVisits', {by: 1, where: {page: 'Register'}});
  },
  saveUser: async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("./user/register", {
        styles: "styles-register.css",
        errors: errors.mapped(),
        old: req.body,
      });
    } else {
      try {
        let newUser = {
          ...req.body,
          profilePicture: req.file
            ? req.file.filename
            : req.body.profilePicture,
          categoryId: 1,
        };
        newUser.password = bcrypt.hashSync(req.body.password, 10);
        delete newUser.rePassword;

        await db.User.create(newUser);

        res.redirect("/user/login");
        await db.NewUser.increment('numberOfNewUsers', {by: 1, where: {id: 1}});
      } catch (error) {
        console.log(error);
      }
    }
  },
  userProfile: async (req, res) => {
    res.render("./user/userProfile", { styles: "styles-userProfile.css" });
    await db.VisitedPage.increment('numberOfVisits', {by: 1, where: {page: 'Perfil de Usuario'}});
  },

  editProfile: async (req, res) => {
    try {
      let userToEdit = await db.User.findByPk(req.params.id);
      res.render("./user/editProfile", {
        styles: "styles-editProfile.css",
        userToEdit,
      });
    } catch (error) {
      console.log(error);
    }
  },

  saveProfile: async (req, res) => {
    try {
      const userToEdit = await db.User.findByPk(req.params.id);
      
      await db.User.update(
        {
          ...req.body,
          profilePicture: req.file ? req.file.filename : userToEdit.profilePicture,
        },
        {
          where: { id: req.params.id },
        }
      );
      req.session.destroy();
    } catch (error) {
      console.log(error);
    }
      },
};

module.exports = user;
