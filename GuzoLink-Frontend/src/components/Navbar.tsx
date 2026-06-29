// src/components/Navbar.tsx
import { Link, useNavigate } from "react-router-dom";
import "../style/navbar.css";
import { isLoggedIn, clearAuth } from "../api/api";

function Navbar() {
  const navigate = useNavigate();

  const loggedIn = isLoggedIn();

  const handleLogout = () => {
  
    clearAuth();
    navigate("/");
  };

  return (
    <div className="nav">
      <nav>
        <h2 id="logo">GuzoLink</h2>

        <ul>
          <li><Link to="/">Home</Link>{" "}</li>
          <li><Link to="/trips">Trips</Link>{" "}</li>
          <li><Link to="/destinations">Destinations</Link>{" "}</li>

          {loggedIn ? (
            <li>
              <button onClick={handleLogout} className="logoutBtn">
                Logout
              </button>
            </li>
          ) : (
            <>
              <li><Link to="/login">Login</Link>{" "}</li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>

      </nav>
    </div>
  );
}

export default Navbar;