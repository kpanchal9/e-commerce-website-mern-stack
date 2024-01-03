import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import './PCard.css';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const PCard = ({ category }) => {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/Products/category/${category}`); // Make GET request to your backend endpoint
        setProduct(response.data);
        console.log(response.data); // Set the fetched data in state
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [category]);

//   const API_URL = "http://localhost:8080/Products";

//   useEffect(() => {
//   const fatchData = async () =>{
//     try {
//       let response = await fetch(`${API_URL}`);
//       let jsonResponse = await response.json();

//       console.log(jsonResponse);

//     } catch (error) {
//       throw error
//     }
//   };
//   fatchData();
// }, []);

  return (
   
    <div className="product-container row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 mb-3">
    { Array.isArray(products) && products.length > 0 ? (
      products.map(product => (
      <Link to={`/product/${product._id}`} key={product._id} style={{textDecoration:"none"}}>  
      <Card key={product._id} sx={{ maxWidth: 345 }} style={{ boxShadow: '0 0 5px black',marginLeft:"1rem" }} >
        <CardActionArea>
          <CardMedia
            style={{ height: '19rem' }}
            component="img"
            height="140"
            image={product.imageURL} // Assuming your product object has an 'image' field
            alt={product.name} // Assuming your product object has a 'title' field
            className="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{fontWeight:"bold"}}>
              {product.name} {/* Assuming your product object has a 'title' field */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h4 className="description">{product.description}</h4> {/* Assuming your product object has a 'description' field */}
            </Typography>
            <div className="pPrice">
              <span className="price">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
      </Link>
      ))
      ): (
        <p>Product not found</p>
        )}
  </div>
    
  );
};

export default PCard;
