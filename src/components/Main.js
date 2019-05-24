import React from "react";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    margin: "5% 25%"
  }
};

const Main = props => {
  const { classes } = props;
  return (
    <main>
      <Card className={classes.card}>{props.children}</Card>
    </main>
  );
};
export default withStyles(styles)(Main);
