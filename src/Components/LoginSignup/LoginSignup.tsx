import "./LoginSignup.css";

import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";

import password_icon from "../assets/password.png";
import { useState } from "react";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="login-signup-container">
      <div className="login-header">
        <h2>SE CONNECTER</h2>
        <h3>Nous somme heureux de vous voir !</h3>

        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="user icon" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="email icon" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="password icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <div className="forgot-password">
        Lost Password? <span>Click here</span>
      </div>
      <div className="submit-container">
        <div
          className={`submit ${action === "Login" ? "gray" : ""}`}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={`submit ${action === "Sign Up" ? "gray" : ""}`}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
