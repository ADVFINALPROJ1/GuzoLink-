import Navbar from "../components/Navbar";
import "../style/landing.css";
import lalibela from "../assets/lalibela.webp";
import wenchi from "../assets/Wenchi.jpg";
import doho from "../assets/doholodge.jpg";
// import backImage from "../assets/backgroundeimage.jpg";
import Footer from "../components/Footer";


function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <h1>Discover Amazing Places</h1>

        <p>
          Join group trips, explore new destinations,
          and meet travelers from around the world.
        </p>

        <button>Explore Trips</button>
      </div>

      <div className="destinations">
        <h2>Popular Destinations</h2>
        <div className="cards">
            <div className="card">
              <img src={lalibela} alt="Lalibela" />

              <h3>Lalibela</h3>
              <p>4 Days</p>
              <p>16,599 ETB</p>

              <button>View Trip</button>
            </div>
            <div className="card">
              <img src={wenchi} alt="Wenchi" />

              <h3>Wenchi</h3>
              <p>2 Days</p>
              <p>8,999 ETB</p>

              <button>View Trip</button>
            </div>
            <div className="card">
              <img src={doho} alt="Doho Lodge" />

              <h3>Doho Lodge</h3>
              <p>2 Days</p>
              <p>8,999 ETB</p>

              <button>View Trip</button>
            </div>

            <div className="card">
              <img src={doho} alt="Doho Lodge" />

              <h3>Doho Lodge</h3>
              <p>4 Days</p>
              <p>11,999 ETB</p>

              <button>View Trip</button>
            </div>
          </div>

      </div>
      <div className="features">

      <div className="featureCard">
        <h3>Secure Payments</h3>

        <p>
          Your payments and personal information
          are protected and secure.
        </p>
      </div>

      <div className="featureCard">
        <h3>24/7 Support</h3>

        <p>
          Our team is available anytime to help
          travelers before and during trips.
        </p>
      </div>

      <div className="featureCard">
        <h3>Verified Trips</h3>

        <p>
          Every trip is reviewed and verified
          to ensure quality experiences.
        </p>
      </div>

     </div>
        
      
      <Footer />
    </div>
  );
}
export default LandingPage;