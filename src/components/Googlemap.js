import React, { Component } from "react";
import loadGoogleMapsAPI from "load-google-maps-api";

const OPTIONS = {
  center: {
    lat: 29.801765,
    lng: -95.359505
  },
  zoom: 9,
  mapTypeControlOptions: {
    mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain"]
  }
};

const markerOptions = (googleMaps, map) => {
  return {
    position: {
      lat: 29.801765,
      lng: -95.359505
    },
    map: map,
    title: "Drone"
    // animation: googleMaps.Animation.BOUNCE
  };
};

const API_CONFIG = {
  key: "AIzaSyCigKH0SSiu1fR70_1QXNDYCeGUgR2N_AU",
  language: "en"
};

class Googlemap extends Component {
  componentWillUnmount() {
    const allScripts = document.getElementsByTagName("script");
    [].filter
      .call(
        allScripts,
        scpt =>
          scpt.src.indexOf("key=AIzaSyCigKH0SSiu1fR70_1QXNDYCeGUgR2N_AU") >= 0
      )[0]
      .remove();

    window.google = {};
  }

  componentDidMount() {
    loadGoogleMapsAPI(API_CONFIG)
      .then(googleMaps => {
        const maps = new googleMaps.Map(this.refs.map, OPTIONS);
        const marker = new googleMaps.Marker(markerOptions(googleMaps, maps));
      })
      .catch(err => {
        console.log("Something went wrong loading the map", err);
      });
  }

  render() {
    return <div id="map" ref="map" />;
  }
}

export default Googlemap;
