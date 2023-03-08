import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style.css'

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/signup", {
                name,
                email,
                password,
            });
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <h2>Signup</h2>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <div>
                <label>Retype Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <button type='submit'>Signup</button>
            <p>Already have an account? <Link to='/login'>Login here</Link></p>
        </form>
    );
};

export default Signup;