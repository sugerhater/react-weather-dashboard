import React, { useEffect } from 'react';
import Fiveday from '../../components/FiveDay';
import Header from "../../components/Header";
import SearchCard from "../../components/SearchCard";
import TodayCard from "../../components/TodayCard";
import { SET_CITY_WEATHER } from "../../store/actions";
import { useStoreContext } from "../../store/GlobalState";

const Homepage = () => {

  const [{ coord }] = useStoreContext();

  // useEffect(async() =>{
  //   // const res = await weatherAPI.getWeather("Columbus");
  //   // setCityInfo(res);
  //   // console.log(res);
  //   // dispatch({type:SET_CITY_WEATHER,payload:res});

  // })

  return (
    coord ? (
      <div className="">
        <Header />
        <div className="row mx-auto">
          <div className="col-4">
            <SearchCard />
          </div>
          <div className="col-8">
            <TodayCard />
            <h2 className="pl-3"> 5 Days Forecast</h2>
            <Fiveday />
          </div>
        </div>
      </div>
    ) : (
      <div className="">
        <Header />
        <div className="row mx-auto">
          <SearchCard />
          <TodayCard />
        </div>
      </div>
    )
  );
};

export default Homepage;