import React, { useState } from "react";
import google from "../../assets/google.png";
import { toast } from "react-toastify";
import { Link} from "react-router-dom";
import "./style.css";
import Button from "../Button";

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginWithEmail = () => {
    setLoading(true);
    if (email === "" || password === "") {
      toast.error("All fields are mandatory!");
      setLoading(false);
    } else {
        //email login logic
        console.log(email, password);
        setLoading(false);
    }
  };

  const loginWithGoogle=()=>{
      setLoading(true);
     //google login logic
     console.log(email, password);
     setLoading(false);
  }

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <div className="login-inputs">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
          <Button text={"Login"} onClick={loginWithEmail} />
      </div>
      <p className="separator">-OR-</p>
      <button
        className="login-link"
        disabled={loading}
        onClick={loginWithGoogle}
      >
        <img src={google} alt="logo" />
        <span>Login with Google</span>
      </button>
      <div className="signup-text">
        <span>Don't have an account?</span>
        <Link to="/signUp">
          <p>SignUp</p>
        </Link>
      </div>      
    </div>
  );
};

export default Login;
