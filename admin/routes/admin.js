const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin"); 


router.get("/",adminController.allProducts)

router.get("/new",adminController.newProduct);

router.post("/",adminController.newProductPost);

router.get("/:id/edit",adminController.getEdit);

router.put("/:id",adminController.putEdit);

router.delete("/:id",adminController.deleteProduct);

module.exports = router