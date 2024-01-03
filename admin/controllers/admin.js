const Product = require("../models/product");

module.exports.allProducts = async (req, res) => {
  try {
    const allProduct = await Product.find({});
    res.render("admin.ejs", { allProduct });
  } catch (error) {
    throw error;
  }
};

module.exports.newProduct = (req,res)=>{
    res.render("new.ejs");
};

module.exports.newProductPost = async(req,res)=>{
    const newProduct = new Product(req.body.product);
    await newProduct.save();
    res.redirect("/admin");
}


module.exports.getEdit = async(req,res)=>{
    let {id} = req.params;
    let product =  await Product.findById(id);
    res.render("edit.ejs",{product});
};

module.exports.putEdit = async(req,res)=>{
    let {id} = req.params;
    //let {title,description,image,price,} = req.body;
    await Product.findByIdAndUpdate(id,{...req.body.product});
    res.redirect("/admin");
};

module.exports.deleteProduct = async(req,res)=>{
    let {id} = req.params;
    let deletedProduct = await Product.findByIdAndDelete(id);
    console.log(deletedProduct);
    res.redirect("/admin");
};