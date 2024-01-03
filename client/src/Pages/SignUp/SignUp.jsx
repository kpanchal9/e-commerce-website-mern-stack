import React, { useState } from "react";
import "./SignUp.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
// import {useHistory}  from 'react-router-dom';
import Footer from "../../componets/footer/Footer";
import { Link } from "react-router-dom";

const SignUp = () => {
  // const history = useHistory();
  const navigate = useNavigate();
  let [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post('http://localhost:8080/signup', formData);
      console.log(response.data); // Successful registration message
      // Optionally redirect to another page after successful registration
      // history.push('/');
      navigate("/"); 
      
    } catch (error) {
        console.error('Error:', error.response ? error.response.data.message : error.message);    // throw error;
    }
  };

  return (
    <div className="mainfm">
      <div className="row formCs">
        <div className="col-6 offset-3 fm">
          <h1>Wellcome to Bazzar</h1>
          <form
            onSubmit={handleSubmit}
            className="needs-validation"
            noValidate
          >
            <div class="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter Your Username"
                value={formData.username}
                id="username"
                onChange={handleInputChange}
              />
              <div class="valid-feedback">Looks Good!</div>
            </div>
            <div class="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter Your Password"
                value={formData.password}
                id="password"
                onChange={handleInputChange}
              />
            </div>
            <div class="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Your Email"
                value={formData.email}
                id="email"
                onChange={handleInputChange}
              />
            </div>
            {/* <Link to={`/`}> */}
            <button class="btn btn-success">SignUp</button>
            {/* </Link> */}
          
          </form>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default SignUp;
