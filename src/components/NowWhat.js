import React from "react";
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

const styles = {
  card: {
    margin: "5% 25%"
  }
};

const NowWhat = props => {
  return (
    <React.Fragment>
      <CardHeader title="Dashboard" />
      <CardContent>
        <table>
          <tr>
            <td>Temperature</td>
            <td />
          </tr>
          <tr>
            <td>Latitude:</td>
            <td />
          </tr>
          <tr>
            <td>Longitude:</td>
            <td />
          </tr>
          <tr>
            <td>Last Received:</td>
            <td />
          </tr>
        </table>
      </CardContent>
    </React.Fragment>
  );
};

export default withStyles(styles)(NowWhat);
