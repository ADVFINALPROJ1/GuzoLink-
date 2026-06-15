import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../style/login.css";


function Login() {
  return (
    <div className="loginContainer">
      <div className="loginCard">

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter your email"/>

      <input
        type="password"
        placeholder="Enter your password"/>

      <div className="forgotpassword">
        <Link to="/forgot-password">
          Forgot Password?
        </Link>
      </div>

      <button className="loginBtn">
        Login
      </button>


      <p className="registertext">
        Don't have an account?{" "}
        <Link to="/register">Register</Link>
      </p>

     </div>

    </div>
      
  );
}

export default Login;

