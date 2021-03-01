import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Images
import SuccessImage from "../images/thankouImage.png";
import AppIcon from "../images/logo.png";
import contributorsIcon from "../images/footerLogo.png";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";


const sucess = (props) => {
  const { classes } = props;

  return (
    <Grid container className={classes.imageWrapper}>
      <Grid item sm />
      <Grid item sm>
        <img src={AppIcon} alt="app-logo" className={classes.image} />
        <div className={classes.timelyConfirmationText}>
          <h1>Your registration will be approved within 24 hours.</h1>
        </div>
        <img src={SuccessImage} alt="thankyou" className={classes.image} />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          // disabled={loading}
          component={Link}
          
          to="/login"
        >
          Login Now
        </Button>

        <img src={contributorsIcon} alt="thankyou" className={classes.imageContributors} />

        <div className={classes.blankSpace}></div>
      </Grid>

      <Grid item sm />
    </Grid>
  );
};

const styles = (theme) => ({
  imageWrapper: {
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
  },
  image: {
    margin: "40px auto 20px auto",
    width: "75%",
  },
  imageContributors: {
    margin: "20px auto 20px auto",
    width: "55%",
  },
  timelyConfirmationText: {
    color: theme.palette.color.gray,
    fontFamily: theme.palette.font.fontFamily,
    width: "85%",
    margin: "auto",
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    position: "relative",
    width: "75%",
    height: 60,
    backgroundColor: theme.palette.color.orange,
    fontFamily: theme.palette.font.fontFamily,
  },
  progress: {
    position: "absolute",
  },
  blankSpace: {
    marginBottom: 60,
    width: "100%",
  },
});

sucess.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(sucess);
