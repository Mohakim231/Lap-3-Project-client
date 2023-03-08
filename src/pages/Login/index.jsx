import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/Login", {
        user,
        password,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.targetvalue)} />
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