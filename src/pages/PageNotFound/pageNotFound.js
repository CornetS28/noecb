import React from "react";
import PropTypes from "prop-types";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

// Utils
import styles from './Styles';

// Images
import Dog404 from "../../images/404_dog.png";

const PageNotFound = (props) => {
  const { classes } = props;
  return (
    <Grid container className={classes.Page404Wrapper}>
      <Grid container item sm={8} xs={12} className={classes.page404Container}>
        <Grid item xs={12} sm={7} className={classes.page404}>
          <div edge="start" className={classes.dogContainer}>
            <img src={Dog404} alt="dog" className={classes.dogImage} />
          </div>
        </Grid>
        <Grid item xs={12} sm={5} className={classes.error404Text}>
          <div className={classes.error404}>
            <h1>Oops!</h1>
            <h2 className={classes.error404TextYellow}>It looks like our</h2>
            <h2 className={classes.error404TextYellow}>ate your page</h2>
            <h3 className={classes.error404TextYellow}>
              The requested URL{" "}
              <span className="text-danger">"{props.location.pathname}"</span>{" "}
              was not found
            </h3>
          </div>
        </Grid>
      </Grid>

      <Grid></Grid>
    </Grid>
  );
};

PageNotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageNotFound);
