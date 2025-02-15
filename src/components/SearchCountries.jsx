import { useState } from "react";

const SearchCountries = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const resetSearch = () => {
    setQuery("");
    onSearch(""); 
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search countries..."
        value={query}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary">Search</button>
      {query && (
        <button className="btn btn-danger" onClick={resetSearch}>
          Reset
        </button>
      )}
    </div>
  );
};

export default SearchCountries;
