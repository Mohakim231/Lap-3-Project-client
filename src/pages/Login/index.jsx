import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from "../../context"
import { decodeToken } from "react-jwt";
import '../style.css';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [decoded, setDecoded] = useState();
  const navigate = useNavigate();
  const { user, setUser } = useAuth();





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
    } catch (err) {
      console.log(err);
    }

    setUser(localStorage.getItem("user"))

    console.log(user)
    navigate("/");

  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type='submit'>Login</button>
      <p>Don't have an account? <Link to='/signup'>Signup here</Link></p>
    </form>
  );
};


export default Login;
