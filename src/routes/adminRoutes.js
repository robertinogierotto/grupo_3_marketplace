const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const adminController = require("../controllers/adminContoller");

/* Multer para subir archivos */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/products");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

/* Index de administradores de la web */
router.get("/", adminController.adminIndex);
/* Lista de todos los productos */
router.get("/productsList", adminController.productsList);
/* Lista de todos los usuarios */
router.get("/usersList", adminController.usersList);
/* para agregar productos */
router.get("/createProduct", adminController.createProduct);
router.post("/", upload.single("inpFile"), adminController.addProduct);
/* para modificar productos */
router.get("/editProduct/:id", adminController.editProduct);
router.put("/:id", upload.single("image"), adminController.saveProduct);
/* para eliminar productos */
router.delete("/:id", adminController.deleteProduct);
/* para eliminar usuarios */
router.delete("/users/:id", adminController.deleteUser);
/* para hacer administrador o sacarle permisos */
router.put("/users/:id", adminController.mkAdm);

module.exports = router;
