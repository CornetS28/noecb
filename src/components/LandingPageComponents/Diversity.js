import React from "react";
import PropTypes from "prop-types";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Diversity = ({
  classes,
  title,
  summary,
  buttonOne,
  buttonTwo,
  buttonThree,
}) => {
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
      className={classes.leftContainer}
    >
      <Grid container item sm={12} xs={11} className={classes.textAndButtons}>
        <Grid item sm={11} xs={12} className={classes.subContainerTwo}>
          <Typography variant="h4" component="h2" className={classes.header}>
            {title}
          </Typography>
          <p className={classes.paragraph}>{summary}</p>

          <Button variant="contained" className={classes.button}>
            {buttonOne}
          </Button>
          <Button variant="contained" className={classes.button}>
            {buttonTwo}
          </Button>
          <Button variant="contained" className={classes.button}>
            {buttonThree}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const styles = (theme) => ({
  leftContainer: {
    marginBottom: 30,
  },
  textAndButtons: {
    margin: "auto",
  },
  subContainerTwo: {
    margin: "auto",
    padding: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
    [theme.breakpoints.down(376)]: {
      marginBottom: -10,
    },
  },
  header: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontFamily: theme.palette.font.bebasNeue,
    fontStyle: "bold",
  },
  paragraph: {
    fontFamily: theme.palette.font.HelveticaNeue,
    lineHeight: 1.3,
  },
  button: {
    textTransform: "uppercase",
    color: theme.palette.color.white,
    backgroundColor: theme.palette.color.darkBlue,
    fontFamily: theme.palette.font.HelveticaNeue,
    borderRadius: 0,
    marginBottom: 0,
    marginTop: 10,
    marginRight: 10,
    lineHeight: 2,
    "&:hover": {
      backgroundColor: theme.palette.color.yellow,
      color: theme.palette.color.darkBlue,
    },
  },
});

Diversity.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Diversity);
