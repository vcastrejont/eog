import React from "react";
import { Chart } from "react-google-charts";

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

const Charts = props => {
  return (
    <React.Fragment>
      <CardHeader title="Charts " />
      <CardContent>
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["x", "Temperature"],
            [0, 274.1218550555868],
            [1, 274.7189715925255],
            [2, 275.3169013456079],
            [3, 275.91550978316207],
            [4, 276.51466222081496],
            [5, 277.11422385179566],
            [6, 278.91401463811906],
            [7, 279.5138635887191]
          ]}
          options={{
            hAxis: {
              title: "Time"
            },
            vAxis: {
              title: "Farenheit"
            },
            title: "Sample Drone Temperature",
            curveType: "function"
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </CardContent>
    </React.Fragment>
  );
};

export default Charts;
