import React from "react";
import Navbar from "../components/Navbar";
import "../style/trips.css";

const bookedTrips = [
  // empty for now
];

const Trips = () => {
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
            {bookedTrips.map((trip) => (
              <div className="trip-card" key={trip.id}>
                <h3>{trip.title}</h3>
                <p>{trip.location}</p>
                <p>{trip.days} days</p>

                <div className="trip-footer">
                  <span>{trip.price} birr</span>
                  <button>View</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Trips;