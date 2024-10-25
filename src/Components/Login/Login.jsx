import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router for navigation
import ogun_games from "../../assets/gateway.png";
import eye from "../../assets/eye.png";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Email validation function
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

 
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 

    
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

  
    setLoading(true);
    try {
      
      await new Promise((resolve) => setTimeout(resolve, 1500));

     
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

        setEmail("");
        setPassword("");

     
      navigate("/vendor");
    } catch (error) {
      
      setError("Failed to log in, please try again.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <div className="login">
        <div className="login-top">
          <div className="login-top-img">
            <img src={ogun_games} alt="" />
          </div>
        </div>
        <form className="form" onSubmit={handleLogin}>
          <div className="form-header">
            <h3>Sign in</h3>
          </div>

         
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <div className="form-input">
              <label>Email</label>
              <input
                type="email"
                placeholder="michael@ogunsport2024.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-eye"
              />
              <div className="eye">
                <img src={eye} alt="Toggle Password Visibility" />
              </div>
            </div>
          </div>

          <div className="form-bottom">
            <div className="form-bottom-left">
              <input type="checkbox" /> <h3>Remember me</h3>
            </div>
            <div className="form-bottom-right">
              <h3>Forgot Password</h3>
            </div>
          </div>

          <div className="form-submit">
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          <div className="form-dont-have">
            <p>
              <span>Don't have an account?</span> Create an account.
            </p>
          </div>

          <div className="form-info">
            <p>All information is safely secured</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
