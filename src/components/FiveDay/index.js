import React, { useEffect,useState } from 'react';
import { useStoreContext } from '../../store/GlobalState';
import weatherAPI from '../../utils/weatherAPI';
import FiveDayCard from '../FiveDayCard';
import moment from 'moment';
// import FiveDayCard from '../FiveDayCard'
const FiveDay = () => {
  const [{coord}] = useStoreContext();
  const [fiveDayInfo,setFiveDayInfo] = useState([]);
  console.log(coord);
  const getFiveDayInfo = async () => {
    const res =await weatherAPI.getFiveDayWeather(coord.lat,coord.lon);
    console.log(res)
    await setFiveDayInfo(res.splice(1,5));

  }
  const days = [
    moment().add(1, 'day').format("MM/DD"),
    moment().add(2, 'day').format("MM/DD"),
    moment().add(3, 'day').format("MM/DD"),
    moment().add(4, 'day').format("MM/DD"),
    moment().add(5, 'day').format("MM/DD"),
  ]
  console.log(days);
  // console.log('----------')
  // // console.log(res)
  // console.log('----------')
  useEffect(()=>{
    getFiveDayInfo();
  },[])

  return (
    fiveDayInfo[0]? (<FiveDayCard humidity = {fiveDayInfo[0].humidity} date={days[0]}/>

    ) :(
      <div>
        loading
      </div>
    )



  );
};

export default FiveDay;