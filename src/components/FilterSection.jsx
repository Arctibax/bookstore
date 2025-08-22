import React from "react";
import "../styles/filter.css";

const FilterSection = ({ genres, selectedGenre, setSelectedGenre }) => {
  return (
    <div className="filter-container">
      <label>Filter by Genre: </label>
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="All">All</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSection;
