const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product");

router.get("/",ProductController.allProduct);

router.get("/:id",ProductController.getOne);

router.get("/category/:category",ProductController.getCategory);

module.exports = router;