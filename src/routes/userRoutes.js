const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path');

const userController = require ('../controllers/userContoller');
const registerValidation = require('../middlewares/registerValidation');

//require para la ruta de usuarios
const userRoute = require('../middlewares/userRoute');
const guestRoute = require('../middlewares/guestRoute');

/* Multer para subir imagen de perfil */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {

      cb(null,  'public/images/user')
    },
    filename: function (req, file, cb) {

      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage })

/* para el login*/
router.get ('/login', guestRoute, userController.login); 
router.post ('/login', guestRoute, userController.authenticate); 
/*para el logout */
router.post('/logout', userRoute, userController.logout);
/* para el register */
router.get ('/register', guestRoute, userController.register); 
router.post ('/', guestRoute, upload.single('ownImage'), registerValidation, userController.saveUser);
/* para el perfil del usuario */
router.get ('/userProfile', userRoute, userController.userProfile);
router.get ('/editProfile', userRoute, userController.editProfile);

module.exports = router;


