import React from "react";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import AvatarRaw from "@material-ui/core/Avatar";

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
