const Product = require("../models/product");

module.exports.allProduct = async(req,res) =>{
    try {
       const allProducts = await Product.find({});
       res.send(allProducts);
       res.status(200).json(allProducts); 
    } catch (error) {
        console.log(error);
    }
}

module.exports.getOne = async (req,res) =>{
  let {id} = req.params;
  try {
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports.getCategory = async (req, res) => {
    const { category } = req.params;
    try {
      const products = await Product.find({ category }); // Fetch products based on category
      res.json(products); // Send filtered data as JSON response
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  