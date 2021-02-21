import React from "react";
import PropTypes from "prop-types";
import Dog404 from "../images/404_dog.png";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

const PageNotFound = (props) => {
  const { classes } = props;
  return (
    <Grid container className={classes.Page404Wrapper}>
      <Grid container item sm={9} xs={12} className={classes.Page404Container}>
        <Grid item sm={7} xs={12}>
          <div edge="start" className={classes.logoWrapper}>
            <img src={Dog404} alt="logo" className={classes.logo} />
          </div>
        </Grid>
        <Grid item sm={5} xs={12}>
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

const styles = (theme) => ({
  Page404Wrapper: {
    backgroundColor: theme.palette.primary.main,
  },
  Page404Container: {
    margin: "auto",
  },
  error404: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.color.red,
    textAlign: "center",
    margin: "30% auto 109px auto",
    fontWeight: "bold",
    fontSize: "18px",
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: theme.palette.font.HelveticaNeue,
    [theme.breakpoints.down(1131)]: {
      margin: "20% auto auto auto",
    },
    [theme.breakpoints.down(849)]: {
      margin: "5% auto auto auto",
    },

    [theme.breakpoints.down(721)]: {
      margin: "auto",
    },
    [theme.breakpoints.down(600)]: {
      paddingBottom: 0,
    },
  },
  error404TextYellow: {
    color: theme.palette.color.yellow,
  },
  logo: {
    width: "100%",
  },
});

PageNotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageNotFound);
