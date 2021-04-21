import React, { useEffect, useState } from 'react';
import { useStoreContext } from '../../store/GlobalState';
import weatherAPI from '../../utils/weatherAPI';
import FiveDayCard from '../FiveDayCard';
import moment from 'moment';
// import FiveDayCard from '../FiveDayCard'
const FiveDay = () => {
  const [{ coord }] = useStoreContext();
  const [fiveDayInfo, setFiveDayInfo] = useState([]);
  console.log(coord);
  const getFiveDayInfo = async () => {
    const res = await weatherAPI.getFiveDayWeather(coord.lat, coord.lon);
    console.log(res)
    await setFiveDayInfo(res.splice(1, 5));

  }
  const days = [
    moment().add(1, 'day').format("MM/DD"),
    moment().add(2, 'day').format("MM/DD"),
    moment().add(3, 'day').format("MM/DD"),
    moment().add(4, 'day').format("MM/DD"),
    moment().add(5, 'day').format("MM/DD"),
  ]
  console.log(days);
  useEffect(() => {
    getFiveDayInfo();
  }, [coord]);
  const numbers = [0, 1, 2, 3, 4];
  return (
    fiveDayInfo[0]
      ? (numbers.map(number => {
        return <FiveDayCard humidity={fiveDayInfo[number].humidity}
          date={days[number]}
          icon={fiveDayInfo[number].weather[0].icon}
          temp={fiveDayInfo[number].temp.day}
        />
      })

        // <FiveDayCard humidity={fiveDayInfo[0].humidity}
        //   date={days[0]}
        //   icon={fiveDayInfo[0].weather[0].icon}
        //   temp={fiveDayInfo[0].temp.day}
        // />

      ) : (
        <div>
          loading
        </div>
      )
  );
};

export default FiveDay;