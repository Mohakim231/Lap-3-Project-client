import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';
import AuthContext from '../../components/context/AuthProvider';
import '../style.css';

const Login = () => {
  const { setAuth } = useState(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", {
        user,
        password,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {success ? (
        <Section>
          <h1>You are logged in</h1>
          <br />
          <Link to="/home">Go to Home</Link>
        </Section>
      ) : (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{}errMsg</p>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input type="text" 
               id="username" 
               ref={userRef}
               autoComplete="off"
               onChange={(e) => setUser(e.target.value)}
               value={user}
               required
        />

        <label htmlFor="password">Password:</label>
        <input type="password" 
               id="password" 
               onChange={(e) => setPwd(e.target.value)}
               value={pwd}
               required
        />
        <button>Sign In</button>
      </form>
      <p>
        Need an Account?<br />
        <span className='line'>
          <Link to="/Signup"></Link>
        </span>
      </p>
    </section>
    )}
    </>
  )
};

export default Login;