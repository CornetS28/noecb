import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

// styles
import styles from "./Styles";

const Archive = (props) => {
  const { classes } = props;

  return (
    <Grid container className={classes.archivesWrapper}>
      <Grid item xs={12} sm={11} className={classes.archivesContainer}>
        <h1 className={classes.test}>Hello from Archive</h1>
      </Grid>
    </Grid>
  );
};
Archive.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Archive);
