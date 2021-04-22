import React, { useEffect } from 'react';
const FiveDayCard = (props) => {

const styles = {
  card:{
    width: "12rem"
  }
}
  return (
    <div className=" float-left pl-3">
      <div className="card pl-3 pt-3 mb-3 bg-primary text-light" style={styles.card}>
        <div className="card-body">
          <h5>{props.date}</h5>
          <p><img src={`https://openweathermap.org/img/w/${props.icon}.png`} /></p>
          <p>Temp: {(props.temp * 9 / 5 - 459.67).toFixed(1)} °F</p>
          <p>humidity: {props.humidity}% </p>
        </div>
      </div>
    </div>
  );
};

export default FiveDayCard;