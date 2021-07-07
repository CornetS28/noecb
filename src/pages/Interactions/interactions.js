import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

// styles
import styles from "./Styles";

const Interactions = (props) => {
  const { classes } = props;

  return (
    <Grid container className={classes.interactionsWrapper}>
      <Grid item xs={12} sm={11} className={classes.interactionsContainer}>
        <h1 className={classes.test}>Hello from Interactions</h1>
      </Grid>
    </Grid>
  );
};
Interactions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Interactions);
