import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: "{password}`)
  };
  
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label type="username" value={username} onChange={handleUsername} />
        </div>
        <div>
            <label type="password" value={password} onChange={handlePassword} />
        </div>
        <button type="submit">Submit</button>
        </form>
    </div>
  );
};

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={handleName} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmail} />
        </div>
        <div>
          <h2>Password</h2>
          <input type="password" value={password} onChange={handlePassword} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const App = () => {
    return (
        <div>
            <Login />
            <Signup />
        </div>
    );
};

export default App;