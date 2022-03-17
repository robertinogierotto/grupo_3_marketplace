const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path');

const userController = require ('../controllers/userContoller');
const registerValidation = require('../middlewares/registerValidation');

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
router.get ('/login', userController.login); 
router.post ('/login', userController.authenticate); 
/*para el logout */
router.post('/logout', userController.logout);
/* para el register */
router.get ('/register', userController.register); 
router.post ('/', upload.single('ownImage'), registerValidation, userController.saveUser);
/* para el perfil del usuario */
router.get ('/userProfile', userController.userProfile);

module.exports = router;


