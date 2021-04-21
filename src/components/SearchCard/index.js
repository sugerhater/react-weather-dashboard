import React, {useRef} from 'react';
import { useStoreContext } from '../../store/GlobalState';
import {SET_CITY, SET_CITY_WEATHER} from '../../store/actions';
const SearchCard = () => {
  const cityRef = useRef();
  const [state,dispatch] = useStoreContext();

  const handleSubmit = async e =>{
    e.preventDefault();
    dispatch({type:SET_CITY,payload:cityRef.current.value})
  }

  return (
    <div id="search-bar" class="col-12 bg-primary ml-auto">
    <form onSubmit={handleSubmit}>
      <label for="city-input">Search for a City:</label>
      <input class= "col-6" id="city-input" type="text" ref= {cityRef} />
      <button className = "btn btn-secondary " type="submit" value="search"> Search</button>
    </form>
    <div id="city-list"></div>
  </div>
  );
};

export default SearchCard;