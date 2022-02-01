import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDafault(); //this stops the refresh!!
        // Gonna write the login logic here..

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            // logged in, redirect to homepage
            history.push('/');
        })
        .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDafault(); //this stops the refresh!!
      // Gonna write the register logic here..

      auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
          // created a user and logged in....
          history.push('/');
      })
      .catch((e) => alert(e.message));
    };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="icon.png" alt="loginPage" />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)}  type="password" />
          <button onClick={login} type="submit" className="buttonOne">Sign In</button>
        </form>

        <p>
          By signing-in you agree to Gemsway's Conditions of Use & Sale. 
          {/* Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          notice. */}
        </p>
        <button onClick={register} className="buttonTwo">Create your Gemsway Account</button>
      </div>
    </div>
  );
}

export default Login;
