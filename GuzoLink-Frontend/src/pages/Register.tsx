import { Link } from "react-router-dom";
import "../style/register.css";

function Register() {
  return (
    <div className="registerContainer">
      <div className="registerCard">

         <h2>Create Account</h2>

         <p className="registerSubtitle">
          Join GuzoLink and start exploring.
         </p>

         <input type="text" placeholder="Full Name"  required />

         <input type="email" placeholder="Email" required />

         <input type="password" placeholder="Password" required />
         <input type="password" placeholder="Confirm Password" required />

        <button className="registerBtn">
          Create Account
        </button>

        <p className="logintext">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;