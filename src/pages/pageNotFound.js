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

const styles = (theme) => ({
  Page404Wrapper: {
    backgroundColor: theme.palette.primary.main,
  },
  page404Container: {
    margin: "60px auto 50px auto",
    [theme.breakpoints.down(1330)]: {
      margin: "auto auto auto auto",
    },
  },
  page404: {
    margin: "10px auto auto auto",
    [theme.breakpoints.down(1330)]: {
      margin: "10% auto 20% auto",
    },
    [theme.breakpoints.down(991)]: {
      marginTop: "20%",
    },
    [theme.breakpoints.down(783)]: {
      margin: "30% auto 20% auto",
    },
    [theme.breakpoints.down(600)]: {
      margin: "auto",
    },
  },
  error404Text: {
    margin: "10px auto auto auto",
    [theme.breakpoints.down(1330)]: {
      margin: "10% auto 20% auto",
    },
    [theme.breakpoints.down(990)]: {
      margin: "15% auto 20% auto",
    },
    [theme.breakpoints.down(783)]: {
      marginBottom: "30%",
    },
    [theme.breakpoints.down(600)]: {
      margin: "auto auto 6% auto",
    },
  },
  dogContainer: {},
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
    [theme.breakpoints.down(1428)]: {
      margin: "20% auto auto auto",
      paddingBottom: 10,
    },
    // [theme.breakpoints.down(1131)]: {
    //   margin: "20% auto auto auto",
    // },
    // [theme.breakpoints.down(849)]: {
    //   margin: "5% auto auto auto",
    // },

    // [theme.breakpoints.down(721)]: {
    //   margin: "auto",
    // },
    [theme.breakpoints.down(600)]: {
      margin: "auto auto auto",
    },
  },
  error404TextYellow: {
    color: theme.palette.color.yellow,
    [theme.breakpoints.down(415)]: {
      fontSize: 16,
    },
  },
  dogImage: {
    width: "100%",
    // height: "80%"
  },
});

PageNotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageNotFound);
