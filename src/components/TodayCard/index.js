import React, { useEffect, useState } from 'react';
import weatherAPI from "../../utils/weatherAPI";
const TodayCard = (props) => {


  const [cityInfo, setCityInfo] = useState({});
  const [highTemp, setHighTemp] = useState("");
  const [lowTemp, setLowTemp] = useState("");
  const getCityInfo = async () => {
    const res = await weatherAPI.getWeather("Columbus");
    setCityInfo(res);
    console.log(res);
  }

  useEffect(() => {
    getCityInfo();
    // console.log(cityInfo);
    // const highTemp = (cityInfo.main.temp_max * 9 / 5 - 459.67).toFixed(1);
  }, [])

  return (
    <div class="card pl-3 pt-3 mb-3 bg-primary text-light">
      <div class="card-body">
        <div class="city">{cityInfo.name}</div>
        {/* <div class="city">{cityInfo.main.humidity}</div>
        <div class="temp">{`Temperature:${(cityInfo.main.pressure * 9 / 5 - 459.67).toFixed(1)}`}</div> */}
        <div class="weather"></div>
        <div class="humidity"></div>
        <div class="wind"></div>
        <div class="UV"></div>
      </div>
    </div>
  );
};

export default TodayCard;
