const express = require('express');
const router = express.Router()

const mainController = require ('../controllers/mainController');

 /* para la Home */
router.get ('/', mainController.home);
/* para quienes somos */
router.get ('/whoWeAre', mainController.whoWeAre); 
/* para contacto */
router.get ('/contact', mainController.contact)

module.exports = router;


