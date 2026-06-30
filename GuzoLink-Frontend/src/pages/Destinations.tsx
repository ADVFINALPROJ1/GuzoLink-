import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../style/destinations.css";

import lalibela from "../assets/lalibela.webp";
import Wenchi from "../assets/Wenchi.jpg";
import Danakil from "../assets/Danakil.jpeg";

export interface Destination {
  id: number;
  title: string;
  location: string;
  days: number;
  price: number;
  image: string;
}

const mockDestinations: Destination[] = [
  {
    id: 1,
    title: "Lalibela Churches",
    location: "Lalibela, Ethiopia",
    days: 4,
    price: 120,
    image: lalibela,
  },
  {
    id: 2,
    title: "Wenchi Crater Lake",
    location: "Amhara, Ethiopia",
    days: 2,
    price: 200,
    image: Wenchi,
  },
  {
    id: 3,
    title: "Danakil Depression",
    location: "Afar, Ethiopia",
    days: 3,
    price: 180,
    image: Danakil,
  },
];

const Destinations = () => {
  const [search, setSearch] = useState("");
  const [selectedTrip, setSelectedTrip] = useState<Destination | null>(null);
  const [bookedTrips, setBookedTrips] = useState<Destination[]>([]);

  const filtered = mockDestinations.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const openBooking = (trip: Destination) => {
    setSelectedTrip(trip);
  };

const confirmBooking = async () => {
  if (!selectedTrip) return;

  await fetch("http://localhost:5000/book/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: 1, // temporary static user
      trip_id: selectedTrip.id,
    }),
  });

  setSelectedTrip(null);
  alert("Trip booked successfully!");
};

  return (
    <div>
      <Navbar />

      <div className="destinations-container">
        <div className="hero">
          <h1>Explore Destinations</h1>

          <input
            placeholder="Search trips..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="cards">
          {filtered.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} />

              <h3>{item.title}</h3>
              <p>{item.location}</p>

              <div className="card-footer">
                <span>{item.price} BIRR</span>

                <button onClick={() => openBooking(item)}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP / MODAL */}
      {selectedTrip && (
        <div className="modal">
          <div className="modal-box">
            <h2>{selectedTrip.title}</h2>
            <p>{selectedTrip.location}</p>
            <p>{selectedTrip.days} Days</p>
            <p>{selectedTrip.price} BIRR</p>

            <div className="modal-actions">
              <button onClick={() => setSelectedTrip(null)}>
                Cancel
              </button>

              <button onClick={confirmBooking}>
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinations;