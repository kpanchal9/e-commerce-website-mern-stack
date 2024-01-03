import React from "react";
import Navbar from "../../componets/NavBar/Navbar";
import Slider from "../../componets/slider/Slider";
import PCard from "../../componets/PCard/PCard";
import Footer from "../../componets/footer/Footer";
import './Home.css';

const Home = () => {
  const selectedCategory = "Electronics";
  const FashionMen = "Fashion Men";
  const FashionWomens = "Fashion Womens";

  return (
    <div>
      <Navbar />
      <Slider />
      <h1 className="CategoryName">{selectedCategory.toUpperCase()}</h1>
      <PCard category={selectedCategory} />
      <h1 className="CategoryName">{FashionMen.toUpperCase()}</h1>
      <PCard category={FashionMen} />
      <h1 className="CategoryName">{FashionWomens.toUpperCase()}</h1>
      <PCard category={FashionWomens} />
      <Footer />
    </div>
  );
};

export default Home;
