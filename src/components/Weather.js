import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";

class Weather extends Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    const { name, weather_state_name, temperatureinFahrenheit } = this.props;

    return (
      <div id="weather">
        <span className="city">
          {name} <br /> <small>Weather</small>
        </span>
        <span className="temp">
          {parseFloat(temperatureinFahrenheit).toFixed(1)} &deg;
          <br />
          <small>{weather_state_name} </small>
        </span>
      </div>
    );
  }
}

const mapState = (state, ownProps) => {
  const {
    loading,
    name,
    weather_state_name,
    temperatureinFahrenheit
  } = state.weather;
  return {
    loading,
    name,
    weather_state_name,
    temperatureinFahrenheit
  };
};

const mapDispatch = dispatch => ({
  onLoad: () =>
    dispatch({
      type: actions.FETCH_WEATHER,
      longitude: -95.359505,
      latitude: 29.801765
    })
});

export default connect(
  mapState,
  mapDispatch
)(Weather);
