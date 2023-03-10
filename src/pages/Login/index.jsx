import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from "../../context"
import { decodeToken } from "react-jwt";
// import '../style.css';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [decoded, setDecoded] = useState();
  const navigate = useNavigate();
  const { user, setUser, user_name, setUser_name } = useAuth();





  const handleLogin = async (e) => {

    e.preventDefault();
    const data = {
      username: username,
      password: password
    }

    try {
      const response = await axios.post("http://localhost:3000/login", data)
      const token = response.data.token[0]
      const decoded = decodeToken(token);

      localStorage.setItem("user", decoded.sub)
      localStorage.setItem("user_name", decoded.username)
    } catch (err) {
      console.log(err);
    }

    setUser(localStorage.getItem("user"))
    setUser_name(localStorage.getItem("user_name"))

    console.log(user)
    console.log(user_name)
    navigate("/");

  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      </div>
      <button type='submit'>Login</button>
      <p>Don't have an account? <Link to='/signup'>Signup here</Link></p>
    </form>
  );
};


export default Login;
