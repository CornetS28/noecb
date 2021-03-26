import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

// styles
import styles from "./Styles";

const Members = (props) => {
  const { classes } = props;

  return (
    <Grid container className={classes.membersWrapper}>
      <Grid item xs={12} sm={11} className={classes.membersContainer}>
        <h1 className={classes.test}>Hello from Members</h1>
      </Grid>
    </Grid>
  );
};
Members.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Members);
