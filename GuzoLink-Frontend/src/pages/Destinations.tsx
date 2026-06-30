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
  price: number;
  image: string;
}

const mockDestinations: Destination[] = [
  {
    id: 1,
    title: "Lalibela Churches",
    location: "Lalibela, Ethiopia",
    price: 120,
    image: lalibela,
  },
  {
    id: 2,
    title: "Wenchi Crater Lake",
    location: "Amhara, Ethiopia",
    price: 200,
    image: Wenchi,
  },
  {
    id: 3,
    title: "Danakil Depression",
    location: "Afar, Ethiopia",
    price: 180,
    image: Danakil,
  },
];

const Destinations = () => {
  const [search, setSearch] = useState("");

  const filtered = mockDestinations.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <div className="destinations-container">
        <div className="hero">
          <h1>Explore Destinations</h1>

          <input
            type="text"
            placeholder="Search trips..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="cards">
          {filtered.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} />

              <h3>{item.title}</h3>
              <p>{item.location}</p>

              <div className="card-footer">
                <span>{item.price} BIRR</span>
                <button>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;