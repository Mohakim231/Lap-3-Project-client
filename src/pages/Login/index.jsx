import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    const data = {
      username: username,
      password: password
    }

    try {
      console.log(username, password)
      const response = await axios.post("http://localhost:3000/login", data);

      // check what you are getting. 

      // save the sub (which is the id) to a state*(useContext)


      console.log(response.data);

    } catch (err) {
      console.log(err);
    }

    navigate("/home");

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
