import React, { useState } from "react";
import "../style/destinations.css";
import lalibela from "../assets/lalibela.webp"
import Wenchi from "../assets/Wenchi.jpg" 
import Danakil from  "../assets/Danakil.jpeg" 

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
    title: "Wenchi",
    location: "Amhara, Ethiopia",
    price: 200,
    image: Wenchi,
  },
  {
    id: 3,
    title: "Danakil Depression",
    location: "Afar, Ethiopia",
    price: 180,
    image:  Danakil,
  },
];

const Destinations = () => {
  const [search, setSearch] = useState("");

  const filtered = mockDestinations.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="destinations-container">
      <div className="hero">
        <h1>Explore Destinations</h1>

        <input
          placeholder="Search trips..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid">
        {filtered.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} />

            <div className="card-body">
              <h3>{item.title}</h3>
              <p>{item.location}</p>

              <div className="footer">
                <span>{item.price}BIRR</span>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;