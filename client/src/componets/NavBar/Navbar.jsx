import React from "react";
import "./NavBar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-body-light border-bottom sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/listings">
            <div className="appLogo">
              <StoreIcon />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                to={"/"}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                Bazzar
              </Link>
            </div>
            <div className="navbar-nav ms-auto"></div>
            <div className="navbar-nav ms-auto">
              <Link
                className="nav-link"
                to={"/signup"}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "400",
                  fontSize: "19px",
                }}
              >
                <b>Sign Up</b>
              </Link>
              <Link
                className="nav-link"
                to={"/login"}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "400",
                  fontSize: "19px",
                }}
              >
                <b>Log in</b>
              </Link>
              <a
                className="nav-link"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "400",
                  fontSize: "19px",
                }}
              >
                <b>Log out</b>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
