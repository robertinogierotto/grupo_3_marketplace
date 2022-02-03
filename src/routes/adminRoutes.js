const express = require('express');
const router = express.Router()

const adminController = require ('../controllers/adminContoller');

router.get ('/adminProducts', adminController.adminProducts); /* para agregar productos */
router.get ('/modifyProducts', adminController.modifyProducts); /* para modificar productos */

module.exports = router;


