const express = require('express');
const router = express.Router()

const adminController = require ('../controllers/adminContoller');

router.get ('/', adminController.adminIndex); /* Index de administradores de la web */
router.get ('/createProduct', adminController.createProduct); /* para agregar productos */
router.get ('/editProduct/:id', adminController.editProduct); /* para modificar productos */
router.get ('/productsList', adminController.productsList); /* Lista de todos los productos */
router.get ('/usersList', adminController.usersList); /* Lista de todos los usuarios */

module.exports = router;


