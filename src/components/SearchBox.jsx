import React from "react";
import "./SearchBox.css"; // Import CSS file for styling

function SearchBox() {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Type to search..."
      />
    </div>
  );
}

export default SearchBox;
