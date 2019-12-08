import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchParams;
