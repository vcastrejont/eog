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

const Charts = props => {
  return (
    <React.Fragment>
      <CardHeader title="Charts " />
      <CardContent />
    </React.Fragment>
  );
};

export default Charts;
