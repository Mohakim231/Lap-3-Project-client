import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';
import '../style.css'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/signup';

const Signup = () => {
    /*
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    */
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    /* Setting focus when component loads on username input */
    useEffect(() => {
        userRef.current.focus();
    }, [])

    /* validate username */
    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    /* hook for password to test against pwd regex and pwd state */
    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd; // comparing pwd to matchpwd state
        // returns boolean of whether there is a match or not
        setValidMatch(match);
    }, [pwd, matchPwd])

    /* hook for error message */
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/signup",
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'ContentType': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(response.data); // get data back from axios
        } catch (err) {
            if (!err.response) {
                setErrMsg("No Server response");
            } else if (err.response?.status === 409) {
                setErrMsg("Username already taken");
            } else {
                setErrMsg("Registration failed");
            }
            errRef.current.focus();
        }
    };

    return (
        <>
        {success ? (
            <section>
            <h1>Success!</h1>
            <p>
                <Link to="/login">Login</Link>
            </p>
            </section>
        ) : (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                    <span className={validName ? "valid" : "hide"}></span>
                </label>
                <input type="text"
                        id='username' 
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)} required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                />
                <p id='uidnote' className={userFocus && user && !validName ? "instructions" : "offscreen"}> 4 to 24 characters. <br />Must begin with a letter. <br />
                Letters, numbers, underscores, hyphens are allowed.
                </p>

                <label htmlFor="password">
                    Password:
                    <span className={validPwd ? "valid" : "hide"}></span>
                    <span className={validPwd || !pwd ? "hide" : "invalid"}></span>
                </label>
                <input type="password"
                        id='password' 
                        onChange={(e) => setPwd(e.target.value)} required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                />
                <p id='pwdnote' className={pwdFocus && !validPwd ? "instructions" : "offscreen"}> 4 to 24 characters. <br />Must begin with a letter. <br />
                Letters, numbers, underscores, hyphens are allowed.
                </p>

                <label htmlFor="confirm_pwd">
                    Confirm Password:
                    <span className={validMatch && matchPwd ? "valid" : "hide"}></span>
                    <span className={validMatch || !matchPwd ? "hide" : "invalid"}></span>
                </label>
                <input type="password"
                        id='confirm_pwd' 
                        onChange={(e) => setMatchPwd(e.target.value)} required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                />
                <p id='confirmnote' className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    Passwords must match!
                </p>
                <button disabled={!validName || !validPwd || !validMatch ? true : false}>Signup</button>
            </form>
            <p>
                Already registered?<br />
                <span className='line'>
                    <Link to="/login">Login</Link>
                </span>
            </p>
        </section>
        )}
        </>
    )
}
export default Signup;