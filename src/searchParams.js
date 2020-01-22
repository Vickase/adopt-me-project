import React, { useState } from "react";

const searchParams = () => {
  const [location, setLocation] = useState("San Francisco, CA");/* Hook. empiezan con use */

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default searchParams;
