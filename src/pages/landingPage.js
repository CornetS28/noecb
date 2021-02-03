import React from "react";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

// Images
import LandingImage from "../images/mainHomeImage.png";

const LandingPage = (props) => {
  const { classes } = props;
  return (
    <Grid container className={classes.landingPageWrapper}>
      <Grid container>
        <Grid item sm />
        <Grid item sm={12} xm={12}>
          <img
            src={LandingImage}
            alt="portrait"
            className={classes.mainImage}
          />
        </Grid>
        <Grid item sm />
      </Grid>
      <Grid sm={12} xs={12} style={{ marginTop: -3 }}>
        <div className={classes.membersCount}>
          <span className={classes.membersCountText}>Current Members: </span>
          <span className={classes.number}> 4,433 </span>
        </div>
      </Grid>
       <Grid sm={12} xs={12} className={classes.newSection}>
         <Grid sm={8} xm={10} className={classes.subSction}>
           sajhscd
         </Grid>
       </Grid>
    </Grid>
  );
};

const styles = (theme) => ({
  landingPageWrapper: {
    backgroundColor: theme.palette.secondary.main,
  },
  mainImage: {
    margin: "auto",
    width: "100%",
  },

  membersCount: {
    lineHeight: 1.5,
    textAlign: "center",
    backgroundColor: theme.palette.color.white,
    fontStyle: theme.palette.font.BebasNeueBold,
  },
  membersCountText: {
    textTransform: "uppercase",
    fontSize: 30,
    fontWeight: 900,
    color: theme.palette.color.darkBlue,
  },
  number: {
    fontSize: 55,
    fontWeight: 900,
    color: theme.palette.color.yellow,
  },
  newSection: {
    backgroundColor: theme.palette.color.darkWhite,
  },
  subSction: {
    margin: "50px auto 50px auto",
    backgroundColor: theme.palette.color.white,
  },
});
export default withStyles(styles)(LandingPage);
