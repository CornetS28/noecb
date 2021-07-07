import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

// styles
import styles from "./Styles";

const PrivacyAndPolicy = (props) => {
  const { classes } = props;

  return (
    <Grid container className={classes.privacyAndPolicyWrapper}>
      <Grid item xs={12} sm={11} className={classes.privacyAndPolicyContainer}>
        <h1 className={classes.test}>Hello from PrivacyAndPolicy</h1>
      </Grid>
    </Grid>
  );
};
PrivacyAndPolicy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrivacyAndPolicy);
