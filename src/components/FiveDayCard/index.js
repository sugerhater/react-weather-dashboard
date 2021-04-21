import React, { useEffect } from 'react';
const FiveDayCard = (props) => {

  console.log(props);
  return (
    <div class="pl-3">
      <div class="card pl-3 pt-3 mb-3 bg-primary text-light">
        <div className="card-body">
          <h5>{props.date}</h5>
          {/* <p>{iconURL}</p> */}
          {/* <p>Temp: ${info.temp} °F</p> */}
          <p>humidity: {props.humidity}% </p>
        </div>
      </div>
    </div>
  );
};

export default FiveDayCard;