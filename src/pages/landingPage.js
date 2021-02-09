import React from "react";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

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
      <Grid item sm={12} xs={12} style={{ marginTop: -3 }}>
        <div className={classes.membersCount}>
          <span className={classes.membersCountText}>Current Members: </span>
          <span className={classes.number}> 4,433 </span>
        </div>
      </Grid>
      <Grid item sm={12} xs={12} className={classes.multipleSectionsWrapper}>
        <Grid container item sm={8} xs={10} className={classes.subSection}>
          {/* MULTIPLE SECTION PART 1 */}
          <Grid
            container
            item
            sm={12}
            xs={12}
            className={classes.multipleSectionsContainer}
          >
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.leftContainer}
            >
              <Grid container item sm={12} xs={12}>
                <Grid item sm={11} xs={12} className={classes.subContainerOne}>
                  <Typography
                    variant="h4"
                    component="h2"
                    className={classes.header}
                  >
                    Engagements
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h2"
                    className={classes.header}
                  >
                    Community and Social bond
                  </Typography>
                  <p className={classes.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </p>
                </Grid>
              </Grid>
            </Grid>

            <Grid item sm={6} xs={12} className={classes.rightContainer}>
              <Grid container item sm={12} xs={12}>
                <Grid item sm={11} xs={12} className={classes.subContainerOne}>
                  asdfg
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* MULTIPLE SECTION PART 2 */}
          <Grid
            container
            item
            sm={12}
            xs={12}
            className={classes.multipleSectionsContainer}
          >
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.leftContainer}
            >
              <Grid container item sm={12} xs={12}>
                <Grid item sm={11} xs={12} className={classes.subContainerTwo}>
                  <Typography
                    variant="h4"
                    component="h2"
                    className={classes.header}
                  >
                    Community and Social bond
                  </Typography>
                  <p className={classes.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>

                  <Button variant="contained" className={classes.button}>
                    something
                  </Button>
                  <Button variant="contained" className={classes.button}>
                    something asas
                  </Button>
                  <Button variant="contained" className={classes.button}>
                    asas
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.rightContainer}
            >
              <Grid container item sm={12} xs={12}>
                <Grid item sm={11} xs={12} className={classes.subContainerTwo}>
                  <Typography
                    variant="h4"
                    component="h2"
                    className={classes.header}
                  >
                    Community and Social bond
                  </Typography>
                  <p className={classes.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <Button variant="contained" className={classes.button}>
                    something asas
                  </Button>
                  <Button variant="contained" className={classes.button}>
                    asas
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* MULTIPLE SECTION PART 3 */}
          <Grid
            container
            item
            sm={12}
            xs={12}
            className={classes.multipleSectionsContainer}
          >
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.leftContainer}
            >
              <Grid container item sm={12} xs={12}>
                <Grid
                  item
                  sm={11}
                  xs={12}
                  className={classes.subContainerThree}
                >
                  <Typography
                    variant="h4"
                    component="h2"
                    className={classes.header}
                  >
                    Community and Social bond
                  </Typography>
                  <p className={classes.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>

                  <Button variant="contained" className={classes.button}>
                    something
                  </Button>
                  <Button variant="contained" className={classes.button}>
                    something asas
                  </Button>
                  <Button variant="contained" className={classes.button}>
                    asas
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.rightContainer}
            >
              <Grid container item sm={12} xs={12}>
                <Grid
                  item
                  sm={11}
                  xs={12}
                  className={classes.subContainerThree}
                >
                  <Typography
                    variant="h4"
                    component="h2"
                    className={classes.header}
                  >
                    Community and Social bond
                  </Typography>
                  <p className={classes.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>

                  <Button variant="contained" className={classes.button}>
                    something
                  </Button>
                  <Button variant="contained" className={classes.button}>
                    something asas
                  </Button>
                  <Button variant="contained" className={classes.button}>
                    asas
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} xs={12} className={classes.emptySpace} />
        </Grid>
      </Grid>

      {/* NOECB BAR */}
      <Grid item sm={12} xs={12} className={classes.thickBar}>
        <Typography variant="h3" component="h2" className={classes.header3}>
          Church of bible understanding
        </Typography>

        <h3 className={classes.paragraph4}>
          Church of bible understanding <br />
          <Button variant="contained" className={classes.buttonYellow}>
            Become a member
          </Button>
        </h3>
      </Grid>

      {/* WHY NOECB  */}
      <Grid item sm={12} xs={12} className={classes.whyNoecb}>
        <Typography variant="h3" component="h2" className={classes.header3}>
          Why NOECB?
        </Typography>
        <Grid container item sm={8} xs={12} className={classes.subSection2}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.whyNoecbOne}
          >
            <Paper elevation={0} className={classes.whyNoecbPaper1}>
              <div className={classes.whyNoecbOneImg1}>Image</div>
              <div className={classes.whyNoecbHeader}>
                <Typography
                  variant="h4"
                  component="h2"
                  className={classes.header4b}
                >
                  Support
                </Typography>
                <p className={classes.paragraph5}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit.
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.whyNoecbOne}
          >
            <Paper elevation={0} className={classes.whyNoecbPaper2}>
              <div className={classes.whyNoecbOneImg1}>Image</div>
              <div className={classes.whyNoecbHeader}>
                <Typography
                  variant="h4"
                  component="h2"
                  className={classes.header4b}
                >
                  Support
                </Typography>
                <p className={classes.paragraph5}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit.
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.whyNoecbOne}
          >
            <Paper elevation={0} className={classes.whyNoecbPaper3}>
              <div className={classes.whyNoecbOneImg1}>Image</div>
              <div className={classes.whyNoecbHeader}>
                <Typography
                  variant="h4"
                  component="h2"
                  className={classes.header4b}
                >
                  Support
                </Typography>
                <p className={classes.paragraph5}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit.
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.whyNoecbOne}
          >
            <Paper elevation={0} className={classes.whyNoecbPaper4}>
              <div className={classes.whyNoecbOneImg1}>Image</div>
              <div className={classes.whyNoecbHeader}>
                <Typography
                  variant="h4"
                  component="h2"
                  className={classes.header4b}
                >
                  Support
                </Typography>
                <p className={classes.paragraph5}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit.
                </p>
              </div>
            </Paper>
          </Grid>
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
    fontSize: 40,
    fontWeight: 500,
    color: theme.palette.color.darkBlue,
    fontFamily: theme.palette.font.bebasNeue,
  },
  number: {
    fontSize: 55,
    fontWeight: 800,
    color: theme.palette.color.yellow,
    fontFamily: theme.palette.font.bebasNeue,
  },
  multipleSectionsWrapper: {
    backgroundColor: theme.palette.color.darkWhite,
  },
  subSection: {
    margin: "50px auto 50px auto",
    backgroundColor: theme.palette.color.white,
  },
  subSection2: {
    margin: "50px auto 50px auto",
    backgroundColor: theme.palette.color.white,
    [theme.breakpoints.down(600)]: {
      margin: 40,
    },
  },
  multipleSectionsContainer: {
    margin: "50px 50px -13px 50px",
  },

  subContainerOne: {
    margin: "auto",
    [theme.breakpoints.down(960)]: {
      marginBottom: 40,
    },
  },
  subContainerTwo: {
    margin: "auto",
    padding: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
    // height: 210,
    [theme.breakpoints.down(960)]: {
      marginBottom: 40,
    },
  },
  subContainerThree: {
    margin: "auto",
    padding: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
    // height: 210,
    [theme.breakpoints.down(960)]: {
      marginBottom: 40,
    },
  },
  header: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontFamily: theme.palette.font.bebasNeue,
    fontStyle: "bold",
  },
  header3: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontFamily: theme.palette.font.bebasNeue,
    fontStyle: "bold",
    textAlign: "center",
    paddingTop: 50,
    letterSpacing: theme.palette.font.letterSpacingBig,
  },
  header4: {
    textTransform: "uppercase",
    fontWeight: 300,
    fontFamily: theme.palette.font.bebasNeue,
    fontStyle: "bold",
    textAlign: "center",
    paddingTop: 200,
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
  paragraph4: {
    fontStyle: "bold",
    textAlign: "center",
    padding: "auto",
    marginTop: 0,
    letterSpacing: theme.palette.font.letterSpacingBig,
  },

  paragraph: {
    fontFamily: theme.palette.font.HelveticaNeue,
    lineHeight: 1.3,
  },

  paragraph5: {
    fontFamily: theme.palette.font.HelveticaNeue,
    lineHeight: 1.3,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  emptySpace: {
    height: 75,
    [theme.breakpoints.down(960)]: {
      height: 30,
    },
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
  buttonWrapper: {
    margin: "auto",
    padding: "auto",

    backgroundColor: "red",
  },
  buttonYellow: {
    backgroundColor: theme.palette.color.yellow,
    color: theme.palette.color.darkBlue,
    borderRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 40,
    paddingRight: 40,
    fontFamily: theme.palette.font.bebasNeue,
    fontSize: 30,
    marginTop: 40,
    letterSpacing: theme.palette.font.letterSpacingSmall,
    "&:hover": {
      backgroundColor: theme.palette.color.blueGray,
      color: theme.palette.color.white,
    },
  },

  thickBar: {
    backgroundColor: theme.palette.color.darkBlue,
    height: 265,
    color: theme.palette.color.white,
  },
  whyNoecb: {
    backgroundColor: theme.palette.color.white,
  },
  whyNoecbHeader: {
    // marginTop: -160,
  },
  whyNoecbPaper1: {
    width: "84%",
    backgroundColor: theme.palette.color.yellow,
    color: theme.palette.color.white,
  },
  whyNoecbPaper2: {
    width: "84%",
    backgroundColor: theme.palette.color.red,
    color: theme.palette.color.white,
  },
  whyNoecbPaper3: {
    width: "84%",
    backgroundColor: theme.palette.color.blueGray,
    color: theme.palette.color.white,
  },
  whyNoecbPaper4: {
    width: "84%",
    backgroundColor: theme.palette.color.darkBlue,
    color: theme.palette.color.white,
  },

  whyNoecbOneImg1: {
    width: "100%",
    height: 150,
    backgroundColor: "grey",
  },

  whyNoecbOne: {
    // margin: 4
  },
});
export default withStyles(styles)(LandingPage);
