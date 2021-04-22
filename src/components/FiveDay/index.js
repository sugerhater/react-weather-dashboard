import React, { useEffect, useState } from 'react';
import { useStoreContext } from '../../store/GlobalState';
import weatherAPI from '../../utils/weatherAPI';
import FiveDayCard from '../FiveDayCard';
import moment from 'moment';
import { SET_UVI, SET_UX } from '../../store/actions';
// import FiveDayCard from '../FiveDayCard'
const FiveDay = () => {
  const [{ coord }] = useStoreContext();
  const [state,dispatch] = useStoreContext();
  const [fiveDayInfo, setFiveDayInfo] = useState([]);

  const getFiveDayInfo = async () => {
    const res = await weatherAPI.getFiveDayWeather(coord.lat, coord.lon);
    console.log(res)
    await dispatch({type:SET_UVI,payload:res[0].uvi})
    await setFiveDayInfo(res.splice(1, 5));
  }

  console.log(coord);
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
      ) : (
        <div>
          loading
        </div>
      )
  );
};

export default FiveDay;