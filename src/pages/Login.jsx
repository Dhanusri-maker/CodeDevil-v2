import "./login.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter Email and Password");
      return;
    }

    // Later Firebase login here
    navigate("/splash");
  };

  return (
    <div className="login-page">

      {/* Animated Background */}
      <div className="background">
        <div className="circle c1"></div>
        <div className="circle c2"></div>
        <div className="circle c3"></div>
        <div className="circle c4"></div>

        <span className="particle p1"></span>
        <span className="particle p2"></span>
        <span className="particle p3"></span>
        <span className="particle p4"></span>
        <span className="particle p5"></span>
      </div>

      <motion.div
        className="login-card"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        <h1>Welcome</h1>

        <p>Sign in to continue to CodeDevil</p>

        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <button className="google-btn">
          Continue with Google
        </button>

      </motion.div>

    </div>
  );
}

export default Login;