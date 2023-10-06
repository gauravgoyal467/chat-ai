import React, { useState } from "react";
import "./style.css";
import google from "../../assets/google.png";
import { Link} from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../Button";

const SignUp = ({ setLoggedIn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signUpWithEmail = () => {
    setLoading(true);
    if (name === "" || email === "" || password === "" || cnfPassword === "") {
      toast.error("All fields are mandatory!");
      setLoading(false);
    } else if (name.trim().split(" ").length === 1) {
      toast.error("Please enter your fullName");
      setLoading(false);
    } else if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      setLoading(false);
    } else if (password.length < 8) {
      toast.error("Password should contain at least 8 characters");
      setLoading(false);
    } else if (password !== cnfPassword) {
      toast.error("Please make sure your passwords are same");
      setLoading(false);
    } else {
      //Email signup logic
      console.log(name, email, password, cnfPassword);
      setLoading(false);
    }
  };

  const signUpWithGoogle=()=>{
      setLoading(true);
      //signUp Logic here 

      console.log("signUpWithGoogle");
      setLoading(false);
  }

  return (
    <div className="signUp-container">
      <h2>Create Account</h2>
      <div className="signUp-inputs">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
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
        <input
          type="password"
          value={cnfPassword}
          onChange={(e) => setCnfPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        
        <Button text={"Sign Up"} onClick={signUpWithEmail} />
      </div>
      <p className="separator">-OR-</p>
      <button
        className="signUp-link"
        disabled={loading}
        onClick={signUpWithGoogle}
      >
        <img src={google} alt="logo" />
        <span>SignUp with Google</span>
      </button>
      <div className="login-text">
        <span>Already have account?</span>
        <Link to="/login">
          <p>Log in</p>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
