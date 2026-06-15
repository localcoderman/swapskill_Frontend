import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './Search.css';

const Search = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`search-container ${isActive ? 'active' : ''}`}>
      <div className="search-wrapper">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search skills, mentors, or topics..."
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
        <div className="search-glow" />
      </div>
    </div>
  );
};

export default Search;