import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import Loading from "./Loading";
import {
  FETCH_DRONE,
  FETCH_CANCEL,
  fetchDrone,
  lastUpdate
} from "../store/reducers/Drone";

export class Googlemap extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: FETCH_DRONE });
  }

  componentWillUnmount() {
    this.props.dispatch({ type: FETCH_CANCEL });
  }

  render() {
    const { data } = this.props;

    if (!data) {
      return <Loading />;
    }

    return (
      <Map
        className="customMap"
        google={this.props.google}
        initialCenter={{
          lat: data.latitude,
          lng: data.longitude
        }}
        center={{
          lat: data.latitude,
          lng: data.longitude
        }}
        zoom={7}
      >
        <Marker
          position={{
            lat: data.latitude,
            lng: data.longitude
          }}
          icon={{
            url: "/img/drone.png"
          }}
        />
      </Map>
    );
  }
}

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(
    {
      fetchDrone,
      lastUpdate
    },
    dispatch
  );
  return actions;
};

const mapStateToProps = state => {
  const last = state.drone.data.length;
  return {
    loading: state.drone.loading,
    data: state.drone.data[last - 1],
    last: state.drone.last
  };
};

export default compose(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API
  }),
  connect(mapStateToProps)
)(Googlemap);
