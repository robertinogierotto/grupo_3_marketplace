const express = require('express');
const router = express.Router()

const adminController = require ('../controllers/adminContoller');

router.get ('/adminProducts', adminController.adminProducts); /* para el register */

module.exports = router;


