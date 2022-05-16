const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const db = require("../database/models");

const userController = require("../controllers/userContoller");
const registerValidation = require("../middlewares/registerValidation");
const { validationResult } = require("express-validator");

//require para la ruta de usuarios
const userRoute = require("../middlewares/userRoute");
const guestRoute = require("../middlewares/guestRoute");

/* Multer para subir imagen de perfil */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/user");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const fileFilter = async (req, file, cb) => {
  
  let email = await db.User.findOne({ where: { email: req.body.email } })

  if (req.body.name.length >= 3 && req.body.name.length <= 30 &&
    req.body.lastName.length >= 3 && req.body.lastName.length <= 30 &&
    req.body.email && !email &&
    req.body.password && req.body.rePassword && req.body.password == req.body.rePassword &&
    req.body.terms &&
    (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpg')) {

      cb(null, true);
    
  } else {

    cb(null, false);

  }
};
const upload = multer({ storage });


/* para el login*/
router.get("/login", guestRoute, userController.login);
router.post("/login", guestRoute, userController.authenticate);
/*para el logout */
router.post("/logout", userRoute, userController.logout);
/* para el register */
router.get("/register", guestRoute, userController.register);
router.post(
  "/",
  guestRoute,
  multer({ storage: storage, fileFilter: fileFilter }).single("ownImage"),
  registerValidation,
  userController.saveUser
);
/* para el perfil del usuario */
router.get("/userProfile/:id", userRoute, userController.userProfile);
router.get("/editProfile/:id", userRoute, userController.editProfile);
router.put("/:id",upload.single("profilePicture"), userRoute, userController.saveProfile);
module.exports = router;
