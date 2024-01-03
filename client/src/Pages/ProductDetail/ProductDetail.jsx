import React from "react";
import "./ProductDetail.css";
import Navbar from "../../componets/NavBar/Navbar";
import Footer from "../../componets/footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/Products/${id}`
        ); // Fetch product by ID
        setProduct(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <div>
      <Navbar />
      {product ? (
        <div className="product-detail">
          <div className="product-images">
            {/* Display product images */}
            <img src={product.imageURL} alt={product.name} className="img" />
            {/* Other images or image carousel */}
          </div>
          <div className="product-info">
            <h2>{product.name}</h2>
            <div className="brand">
              <p className="Pbrand"> {product.brand}</p>
            </div>
            <div className="desc">
              <p>{product.description}</p>
            </div>
            {/* Display price, specifications, etc. */}

            <div className="price">
              <h3 className="Pprice">
                {" "}
                ₹{product.price.toLocaleString("en-IN")}
              </h3>
            </div>
            <div className="buttons">
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
                  Add To Cart
                </Button>
                <Button variant="contained" endIcon={<LocalMallIcon />}>
                  Buy Now
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
};

export default ProductDetail;
