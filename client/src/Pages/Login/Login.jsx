import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import './Login.css';

const Login = () => {

    const navigate = useNavigate();
  let [formData, setFormData] = useState({
    username: "",
    password: "",
})

let handleInputChange = (event) => {
    setFormData((currData) => {
        return { ...currData, [event.target.name]: event.target.value };
    })
}

const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', formData);
      console.log(response.data);
      navigate("/");  // Check response data
      // Handle successful login (e.g., store authentication token)
    } catch (error) {
      console.error('Error:', error.response ? error.response.data.message : error.message);
      // Handle login error
    }
  };

  return (
    <div className='mainfm'>
    <div className="row formCs">
        <div className="col-6 offset-3 fm">
            <h1>Wellcome to Bazzar</h1>
            <form onSubmit={handleSubmit} action='/signup' method='POST' className='needs-validation' noValidate>
            <div class="mb-3"> 
                <label htmlFor="username" className='form-label'>Username</label>
                <input type="text" name='username' className='form-control' placeholder='Enter Your Username' value={formData.username} id='username' onChange={handleInputChange} />
                <div class="valid-feedback">Looks Good!</div>
            </div>
            <div class="mb-3">
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" name='password' className='form-control' placeholder='Enter Your Password'value={formData.password} id='password' onChange={handleInputChange}/>
            </div>
            <button class="btn btn-success">Login</button>
            </form>
        </div>
    </div>
    {/* <Footer/> */}
    </div>
  )
}

export default Login