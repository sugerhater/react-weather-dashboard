import React, { useEffect, useState } from 'react';
import { SET_COORD } from '../../store/actions';
import { useStoreContext } from '../../store/GlobalState';
import weatherAPI from "../../utils/weatherAPI";

const TodayCard = () => {
  const styles = {
    todayCard: {
      width: "26rem"
    }
  }
  const [{ city, uvi }, dispatch] = useStoreContext();
  const [cityInfo, setCityInfo] = useState({});
  const getCityInfo = async () => {
    const res = await weatherAPI.getWeather(city);
    setCityInfo(res);
    console.log(res.coord);
    //set coord here
    await dispatch({ type: SET_COORD, payload: res.coord });
  }

  useEffect(() => {
    getCityInfo();
  }, [city, uvi])

  return (
    cityInfo.name ? (
      <div className="card pl-3 pt-3 mb-3 bg-primary text-light mr-auto" style={styles.todayCard}>
        <div className="card-body">
          <h1 className="city">{cityInfo.name} Today</h1>
          <div className="city">Humidity {cityInfo.main.humidity}%</div>
          <div className="temp">{`Temperature:
              ${(cityInfo.main.temp_min * 9 / 5 - 459.67).toFixed(1)}F /
              ${(cityInfo.main.temp_max * 9 / 5 - 459.67).toFixed(1)}F`}</div>
          <div className="weather">
            {/* {cityInfo.weather[0].main} */}
            <img src={`https://openweathermap.org/img/w/${cityInfo.weather[0].icon}.png`} />
          </div>
          <div className="wind">{`Wind Speed: ${(cityInfo.wind.speed * 2.236).toFixed(1)} MPH `}</div>
          {uvi ? (<div className="UV">UXI: {uvi}</div>) : (<div> loading </div>)}
        </div>
      </div>) :
      (<div className="card pl-3 pt-3 mb-3 bg-primary text-light">
        <div className="card-body">
          <div className="city">{ }</div>
          <div className="weather"></div>
          <div className="humidity"></div>
          <div className="wind"></div>
          <div className="UV"></div>
        </div>
      </div>)

  );
};

export default TodayCard;
