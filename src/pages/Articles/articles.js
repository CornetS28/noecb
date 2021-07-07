import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

// styles
import styles from "./Styles";

const Arcticles = (props) => {
  const { classes } = props;

  return (
    <Grid container className={classes.articlesWrapper}>
      <Grid item xs={12} sm={11} className={classes.articlesContainer}>
        <h1 className={classes.test}>Hello from Arcticles</h1>
      </Grid>
    </Grid>
  );
};
Arcticles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Arcticles);
