import React from "react";
import axios from "axios";
import { Hearts } from "react-loader-spinner";

export default function Weather(props) {
  function showTemperature(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }

  const apiKey = "d122489789ce9e01ba81bb0f4a64028b";
  const units = "metric";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);

  return (
    <Hearts
      height="80"
      width="200"
      color="pink"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
