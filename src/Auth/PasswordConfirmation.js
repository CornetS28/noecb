import React from "react";
import PropTypes from "prop-types";
import AppIcon from "../images/logo.png";

//Images

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";


const passwordConfirmation = (props) => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location.href = "/login";
  };

  const { classes } = props;
  return (
    <Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sm>
        <img src={AppIcon} alt="monkey" className={classes.image} />
        <div className={classes.emailText}>
          <h1>Successfully reset password!</h1>
        </div>
        <div className={classes.emailTextDescription}>
          <p>You can now use your new password to log in to your account!</p>
        </div>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            // disabled={loading}
          >
            Login
          </Button>
        </form>
        <div className={classes.blankSpace}></div>
      </Grid>

      <Grid item sm />
    </Grid>
  );
};

const styles = (theme) => ({
  form: {
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
  },
  image: {
    margin: "40px auto 20px auto",
    width: "75%",
  },
  emailText: {
    color: theme.palette.color.gray,
    fontFamily: theme.palette.font.fontFamily,
    width: "60%",
    margin: "auto",
  },
  emailTextDescription: {
    width: "50%",
    color: theme.palette.color.darkGray,
    fontFamily: theme.palette.font.fontFamily,
    margin: "auto",
  },
  textField: {
    margin: "10px auto 10px auto",
    width: "75%",
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.fontFamily,
    backgroundColor: "#383838",
  },
  focusInputColor: {
    color: theme.palette.color.gray,
    fontFamily: theme.palette.font.fontFamily,
  },
  multilineColor: {
    color: theme.palette.color.orange,
    fontFamily: theme.palette.font.fontFamily,
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
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
    fontFamily: theme.palette.font.fontFamily,
  },
  progress: {
    position: "absolute",
  },
  invisibleSeparator: {
    border: "none",
    margin: 4,
  },
  visibleSeparator: {
    width: "100%",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    marginBottom: 20,
  },
  paper: {
    padding: 20,
  },
  blankSpace: {
    marginBottom: 60,
    width: "100%",
  },
  textForm: {
    color: theme.palette.color.gray,
    margin: "auto",
    width: "75%",
    textAlign: "left",
  },
});

passwordConfirmation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(passwordConfirmation);
