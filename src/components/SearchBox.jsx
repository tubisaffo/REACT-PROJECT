import React from "react";

function SearchBox({ value, setSearchValue }) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        value={value}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Type to search..."
      />
    </div>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string,
  setSearchValue: PropTypes.func,
};

export default SearchBox;
