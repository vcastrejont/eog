import React from "react";
import { bindActionCreators } from "redux";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Loading from "./Loading";
import { fetchDrone, lastUpdate } from "../store/reducers/Drone";

const cardStyles = theme => ({
  root: {
    background: "#2196f3"
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

class Dashboard extends React.Component {
  timer = null;
  last = null;
  componentDidMount() {
    this.props.fetchDrone();
    this.timer = setInterval(() => this.props.fetchDrone(), 5000);
    this.last = setInterval(() => this.props.lastUpdate(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { data, last } = this.props;

    if (!data) {
      return <Loading />;
    }
    return (
      <React.Fragment>
        <CardHeader title="Dashboard" />
        <CardContent>
          <table>
            <tbody>
              <tr>
                <td>Temperature: </td>
                <td>{parseFloat(data.metric).toFixed(1)} Fahrenheit</td>
              </tr>
              <tr>
                <td>Latitude:</td>
                <td>{data.latitude}</td>
              </tr>
              <tr>
                <td>Longitude:</td>
                <td>{data.longitude}</td>
              </tr>
              <tr>
                <td>Last Received:</td>
                <td>{last} seconds ago</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </React.Fragment>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
