import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


const FullCommunityDetails = ({ classes, item }) => (
  <Grid item sx={12} sm={12}>
    <Paper variant="outlined" elevation={0} className={classes.userFullDetailsWrapper}>
      <Grid className={classes.avatarContainer}>
        <div className={classes.title}>
          <h3>{item.title}</h3>
        </div>
        <div className={classes.description}>
          <p>{item.totalDescription}</p>
        </div>
      </Grid>
    </Paper>
  </Grid>
);

FullCommunityDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
};

const styles = (theme) => ({
  userFullDetailsWrapper: {
    backgroundColor: theme.palette.color.darkBlue,
    color: theme.palette.color.yellow,
    width: "100%",
    height: 300,
    overflowY: "scroll",
    margin: "auto auto 35px auto",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.color.darkBlue,
    },
    [theme.breakpoints.down(415)]: {
      height: 500,
    },
  },
  title: {
    fontFamily: theme.palette.helveticaNeue,
    color: theme.palette.secondary.main,
    fontSize: 20,
    fotnWeight: "bold",
    textAlign: "center",
  },

  description: {
    fontFamily: theme.palette.helveticaNeue,
    color: theme.palette.secondary.main,
    margin: "10px 20px 10px 20px",
    lineHeight: 1.4,
  },
});

export default withStyles(styles)(FullCommunityDetails);
