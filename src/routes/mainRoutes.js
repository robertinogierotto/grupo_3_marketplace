const express = require('express');
const router = express.Router()

const mainController = require ('../controllers/mainController');

router.get ('/', mainController.home); /* para la Home */
router.get ('/whoWeAre', mainController.whoWeAre); /* para quienes somos */

module.exports = router;


