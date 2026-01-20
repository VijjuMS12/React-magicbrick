import React from "react";
import "./Search.css";
function Search() {
  return (
    <div className="search-container">
      <h1>Find Your Dream Home</h1>
      <p>Search properties for buy, rent, and sale</p>

      <div className="search-box">
        <input type="text" placeholder="Enter city, locality, or project" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Search;