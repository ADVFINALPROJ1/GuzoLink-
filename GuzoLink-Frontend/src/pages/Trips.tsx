import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../style/trips.css";

const Trips = () => {
  const [bookedTrips, setBookedTrips] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch("http://localhost:5000/book/user/1");
      const data = await res.json();
      setBookedTrips(data);
    } catch (error) {
      console.log("Error fetching bookings", error);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="trips-container">
        <h1 className="title">My Trips</h1>

        {bookedTrips.length === 0 ? (
          <div className="empty-card">
            <h2>You haven’t booked any trips yet</h2>
            <p>Go to destinations and book your first trip.</p>
          </div>
        ) : (
          <div className="trips-grid">
            {bookedTrips.map((trip: any) => (
              <div className="trip-card" key={trip.id}>
              <h3>{trip.title}</h3>
<p>{trip.location}</p>
<p>{trip.days} Days</p>
<span>{trip.price} BIRR</span>
                <p>Booking ID: {trip.id}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Trips;