import React, { useEffect, useState } from 'react';
import { useStoreContext } from '../../store/GlobalState';
import weatherAPI from "../../utils/weatherAPI";

const TodayCard = (props) => {
  const [{city}] = useStoreContext();
  // const [ { cityInfo} ] = useStoreContext();
  // const [highTemp, setHighTemp] = useState("");
  // const [lowTemp, setLowTemp] = useState("");
  const [cityInfo, setCityInfo] = useState({});
  const getCityInfo = async () => {
    const res = await weatherAPI.getWeather(city);
    setCityInfo(res);
    console.log(res);
  }

  useEffect(() => {
    getCityInfo();
    // console.log(cityInfo);
    // const highTemp = (cityInfo.main.temp_max * 9 / 5 - 459.67).toFixed(1);
  }, [city])

  return (
    cityInfo.name ? (
      <div class="card pl-3 pt-3 mb-3 bg-primary text-light mr-auto">
        <div class="card-body">
          <div class="city">{ cityInfo.name} Today</div>
          <div class="city">Humidity { cityInfo.main.humidity}%</div>
          <div class="temp">{`Temperature:
              ${(cityInfo.main.temp_min * 9 / 5 - 459.67).toFixed(1)}F /
              ${(cityInfo.main.temp_max * 9 / 5 - 459.67).toFixed(1)}F`}</div>
          <div class="weather">
              <img src = {`https://openweathermap.org/img/w/${cityInfo.weather[0].icon}.png`} />
          </div>
          <div class="wind">{`Wind Speed: ${(cityInfo.wind.speed * 2.236).toFixed(1)} MPH `}</div>
          <div class="UV"></div>
        </div>
      </div>) : (<div class="card pl-3 pt-3 mb-3 bg-primary text-light">
        <div class="card-body">
          <div class="city">{}</div>
          {/* <div class="city">{cityInfo.main.humidity}</div>
      <div class="temp">{`Temperature:${(cityInfo.main.pressure * 9 / 5 - 459.67).toFixed(1)}`}</div> */}
          <div class="weather"></div>
          <div class="humidity"></div>
          <div class="wind"></div>
          <div class="UV"></div>
        </div>
      </div>)

  );
};

export default TodayCard;
