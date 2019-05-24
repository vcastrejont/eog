import React from "react";
import { Chart } from "react-google-charts";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";

import Loading from "./Loading";
import { fetchDrone, lastUpdate } from "../store/reducers/Drone";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";

const cardStyles = theme => ({
  root: {
    background: "#2196f3"
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

export class Charts extends React.Component {
  componentDidMount() {
    this.props.fetchDrone();
    this.timer = setInterval(() => this.props.fetchDrone(), 5000);
  }
  render() {
    const { data } = this.props;

    if (!data) {
      return <Loading />;
    }

    return (
      <React.Fragment>
        <CardHeader title="Charts " />
        <CardContent>
          <Chart
            width={"100%"}
            height={"400px"}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[["x", "Farenheit"], ...data]}
            options={{
              hAxis: {
                title: "Time"
              },
              vAxis: {
                title: "Temperature "
              },
              title: "Sample Drone Temperature",
              curveType: "function",
              legend: { position: "right" }
            }}
            rootProps={{ "data-testid": "1" }}
          />
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
  return {
    loading: state.drone.loading,
    data: state.drone.data.map((item, index) => {
      return [new Date(item.timestamp * 1000).toString(), item.metric];
    })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Charts);
