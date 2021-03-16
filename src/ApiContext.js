import React from "react";

export default React.createContext({
  unit: "",
  query: "",
  current_temp: "",
  max_temp: "",
  min_temp: "",
  description: "",
  humidity: "",
  wind_speed: "",
});
