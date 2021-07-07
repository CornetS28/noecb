import React from 'react';


// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";

// Components
import MemeGenerator from "../../components/Socials/MemeGenerator";

// Styles
import styles from "./Styles"

// Images
import LandingImage from "../../images/mainHomeImage.png";


const Social = (props) => {
  const { classes } = props;
  return (
    <Grid container className={classes.memeGeneratorPageWrapper}>
      <Grid container>
        <Grid item sm />
        <Grid item sm={12} xm={12} className={classes.imgContainer}>
          <img src={LandingImage} className={classes.mainImage} />
        </Grid>
        <Grid item sm />
      </Grid>
      <Grid sm={12} xs={12}>
        <Divider className={classes.divider} />
      </Grid>

      <MemeGenerator />
    </Grid>
  );
}

export default withStyles(styles)(Social);
