import PropTypes from "prop-types";
import "../App.css";

function SearchBox({ value, setSearchValue }) {
  return (
    <div className="search">
      <input
        className="form-control"
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