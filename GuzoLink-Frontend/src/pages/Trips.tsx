// src/pages/Trips.tsx
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { fetchTrips } from "../api/api";
import type { Trip } from "../api/api";

function Trips() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTrips = async () => {
      try {
        const data = await fetchTrips();
        setTrips(data);
      } catch (err: any) {
        setError(err.message || "Failed to load trips.");
      } finally {
        setLoading(false);
      }
    };

    loadTrips();
  }, []);

  return (
    <div>
      <Navbar />

      <h1>Trips Page</h1>

      {loading && <p>Loading trips...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="cards">
        {trips.map((trip) => (
          <div className="card" key={trip.id}>
            {trip.image && <img src={trip.image} alt={trip.title} />}
            <h3>{trip.title}</h3>
            <p>{trip.days} Days</p>
            <p>${Number(trip.price).toFixed(2)}</p>
            <button>View Trip</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trips;