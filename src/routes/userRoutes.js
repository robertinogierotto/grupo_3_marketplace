const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path');

const userController = require ('../controllers/userContoller');
const loginValidation = require('../middlewares/loginValidation');

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
/* para el register */
router.get ('/register', userController.register); 
router.post ('/', upload.single('ownImage'), loginValidation, userController.saveUser);

module.exports = router;


