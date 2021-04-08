import React, { useEffect } from 'react';
import Header from "../../components/Header";
import SearchCard from "../../components/SearchCard";
import TodayCard from "../../components/TodayCard";
import {SET_CITY_WEATHER} from "../../store/actions";
import {useStoreContext} from "../../store/GlobalState";

const Homepage = () => {

  useEffect(async() =>{
    // const res = await weatherAPI.getWeather("Columbus");
    // setCityInfo(res);
    // console.log(res);
    // dispatch({type:SET_CITY_WEATHER,payload:res});

  })

  return (
    <div className= "">
      <Header />
      <div className="row mx-auto">
        <SearchCard />
        <TodayCard />
      </div>
    </div>
  );
};

export default Homepage;