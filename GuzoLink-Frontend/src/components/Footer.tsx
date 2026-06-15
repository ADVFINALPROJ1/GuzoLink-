import "../style/footer.css";

function Footer() {
  return (
    <div className="footer">

      <div className="footerTop">

        <div className="footerSection">
          <h2>GuzoLink</h2>

          <p>
            Connect with travelers and discover
            amazing destinations around the world.
          </p>
        </div>

        <div className="footerSection">
          <h3>Company</h3>

          <p>About Us</p>
          <p>Contact Us</p>
        </div>

        <div className="footerSection">
          <h3>Support</h3>

          <p>Help Center</p>
          <p>Safety</p>
          <p>FAQ</p>
        </div>

        <div className="footerSection">
          <h3>Explore</h3>

          <p>Destinations</p>
          <p>Trips</p>
          <p>Community</p>
        </div>

      </div>

      <div className="footerBottom">
        <p>copyright 2026 GuzoLink. All rights reserved.</p>
      </div>

    </div>
  );
}

export default Footer;