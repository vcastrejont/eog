import WeatherSagas from "./Weather";
import ApiErrors from "./ApiErrors";
import DroneSagas from "./Drone";

export default [...ApiErrors, ...WeatherSagas, ...DroneSagas];
