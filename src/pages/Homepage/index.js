import React, { useEffect } from 'react';
import Header from "../../components/Header";
import SearchCard from "../../components/SearchCard";
import TodayCard from "../../components/TodayCard";
import {useStoreContext} from "../../store/GlobalState";
const Homepage = () => {

  // useEffect(() =>{

  // })

  return (
    <div>
      <Header />
      <div className="row">
        <SearchCard />
        <TodayCard />
      </div>
    </div>
  );
};

export default Homepage;