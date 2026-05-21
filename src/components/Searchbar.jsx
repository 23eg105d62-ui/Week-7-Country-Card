import React, { useRef } from "react";

function Searchbar({ onSearch }) {
  const timeoutRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onSearch(value.trim());
    }, 500);
  };

  return (
    <input
      type="text"
      placeholder="Search countries..."
      className="search-input"
      onChange={handleChange}
    />
  );
}

export default Searchbar;