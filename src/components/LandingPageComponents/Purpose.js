import React from 'react';
import PropTypes from "prop-types";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const Purpose = ({ classes, paperColor, purposeImage, header, description }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      lg={3}
      className={classes.whyNoecbContainer}
    >
      <Paper elevation={0} className={paperColor}>
        <div className={classes.whyNoecbImg}>
          <img src={purposeImage} alt="portrait" className={classes.image} />
        </div>
        <div className={classes.whyNoecbHeader}>
          <Typography variant="h4" component="h2" className={classes.header4b}>
            {header}
          </Typography>
          <p className={classes.paragraph5}>{description}</p>
        </div>
      </Paper>
    </Grid>
  );
};
const styles = (theme) => ({
  whyNoecbContainer: {
    [theme.breakpoints.down(600)]: {
      marginLeft: 10,
      marginRight: 10,
    },
  },
  whyNoecbImg: {
    width: "100%",
    height: 150,
    backgroundColor: "grey",
  },
  image: {
    margin: "auto",
    flexShrink: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  header4b: {
    textTransform: "uppercase",
    fontWeight: 300,
    fontFamily: theme.palette.font.bebasNeue,
    fontStyle: "bold",
    textAlign: "left",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  paragraph5: {
    fontFamily: theme.palette.font.HelveticaNeue,
    lineHeight: 1.3,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
});

Purpose.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Purpose);