import React from 'react';

const SearchCard = () => {
  return (
    <div id="search-bar" class="col-4 bg-primary">
    <form>
      <label for="city-input">Search for a City:</label>
      <input id="city-input" type="text" />
      <input id="search-city" type="submit" value="search" /> 
    </form>
    <div id="city-list"></div>
  </div>
  );
};

export default SearchCard;