import "./Cards.css";
import React, {useState} from "react";
const initialProperties = [
  {
    id: 1,
    image: "/images/flat1.avif",
    owner: "Rohit",
    title: "3 BHK Flat for Sale in Marathahalli",
    area: "1350 sq.ft",
    status: "Ready to Move",
    floor: "5th of 10",
    furnished: "Fully Furnished",
    bathrooms: "2 Bathrooms",
    price: "₹ 85 Lakhs",
    liked:false,
  },
  {
    id: 2,
    image: "/images/flat2.avif",
    owner: "Amit",
    title: "2 BHK Flat for Sale in Whitefield",
    area: "1050 sq.ft",
    status: "Under Construction",
    floor: "3rd of 8",
    furnished: "Semi Furnished",
    bathrooms: "2 Bathrooms",
    price: "₹ 60 Lakhs",
    liked:false,
  },
  {
    id: 3,
    image: "/images/flat3.avif",
    owner: "Neha",
    title: "3 BHK Flat for Sale in Electronic City",
    area: "1450 sq.ft",
    status: "Ready to Move",
    floor: "7th of 12",
    furnished: "Unfurnished",
    bathrooms: "3 Bathrooms",
    price: "₹ 95 Lakhs",
    liked:false,
  },
];

function Cards() {
    const [properties, setProperties] = useState(initialProperties);

  const toggleLike = (id) => {
    setProperties(
      properties.map((p) =>
        p.id === id ? { ...p, liked: !p.liked } : p
      )
    );
  };
  return (
    <div className="cards-container">
      <h2>Properties for Sale</h2>

      {properties.map((p) => (
        <div className="card-vertical" key={p.id}>
          <div className="image-section">
            <img src={p.image} alt="Flat" />
            <p className="owner-name">Owner: {p.owner}</p>
          </div>

          <div className="card-details">
            <div className="top-icons">
              <div className="mb-2">
            <span
              style={{ cursor: "pointer", color: p.liked ? "red" : "gray" }}
              onClick={() => toggleLike(p.id)}
            >
              {p.liked ? "❤️" : "🤍"}
            </span>
            <span style={{ marginLeft: "10px", color: "red" }}>🔗</span>
          </div>
              
            </div>

            <h3>{p.title}</h3>

            <div className="info-line">
              <span>📐 {p.area}</span>
              <span>•</span>
              <span>🏠 {p.status}</span>
              <span>•</span>
              <span>⬆️ {p.floor}</span>
              <span>•</span>
              <span>🛋️ {p.furnished}</span>
              <span>•</span>
              <span>🛁 {p.bathrooms}</span>
            </div>

            <div className="price">{p.price}</div>

            <div className="actions">
              <button className="contact-btn">Contact Owner</button>
              <button className="loan-btn">Get Home Loan</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;