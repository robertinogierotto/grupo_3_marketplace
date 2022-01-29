const express = require('express');
const router = express.Router()

const userController = require ('../controllers/userContoller');

router.get ('/login', userController.login); /* para el login*/
router.get ('/register', userController.register); /* para el register */

module.exports = router;


