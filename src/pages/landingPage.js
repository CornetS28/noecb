import React from "react";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

// Images
import LandingImage from "../images/mainHomeImage.png";
import DiversityPic from "../images/diversityPic.png";

// Components
import Slider from "../components/LandingPageComponents/Slider/Slider";
import Diversity from "../components/LandingPageComponents/Diversity";

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
              className={classes.dsd}
            >
              <Grid
                container
                item
                sm={12}
                xs={11}
                className={classes.textAndButtons}
              >
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

            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.leftContainer}
            >
              <Grid
                container
                item
                sm={12}
                xs={11}
                className={classes.textAndButtons}
              >
                <Grid item sm={11} xs={12} className={classes.subContainerOne}>
                  <div className={classes.diversityImage}>
                    <img
                      src={DiversityPic}
                      alt="portrait"
                      className={classes.image}
                    />
                  </div>
                </Grid>
                <Grid item sm={12} xs={12} className={classes.emptySpace1} />
              </Grid>
            </Grid>

            {/* <Grid item sm={6} xs={12} className={classes.rightContainer}>
              <Grid
                container
                item
                sm={12}
                xs={11}
                className={classes.textAndButtons}
              >
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
            </Grid> */}
          </Grid>

          {/* MULTIPLE SECTION PART 2 */}
          <Grid
            container
            item
            sm={12}
            xs={12}
            className={classes.multipleSectionsContainer}
          >
            <Diversity
              title="Community and Social bond"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
              buttonOne="something"
              buttonTwo="something"
              buttonThree="something"
            />
            <Diversity
              title="Community and Social bond"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
              buttonOne="something"
              buttonTwo="something"
              buttonThree="something"
            />
            <Diversity
              title="Community and Social bond"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
              buttonOne="something"
              buttonTwo="something"
              buttonThree="something"
            />
            <Diversity
              title="Community and Social bond"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
              buttonOne="something"
              buttonTwo="something"
              buttonThree="something"
            />
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
            md={6}
            lg={3}
            className={classes.whyNoecbContainer}
          >
            <Paper elevation={0} className={classes.whyNoecbPaper1}>
              <div className={classes.whyNoecbImg}>
                <img
                  src={LandingImage}
                  alt="portrait"
                  className={classes.image}
                />
              </div>
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
            md={6}
            lg={3}
            className={classes.whyNoecbContainer}
          >
            <Paper elevation={0} className={classes.whyNoecbPaper2}>
              <div className={classes.whyNoecbOneImg1}>
                {" "}
                <div className={classes.whyNoecbImg}>
                  <img
                    src={LandingImage}
                    alt="portrait"
                    className={classes.image}
                  />
                </div>
              </div>
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
            md={6}
            lg={3}
            className={classes.whyNoecbContainer}
          >
            <Paper elevation={0} className={classes.whyNoecbPaper3}>
              <div className={classes.whyNoecbOneImg1}>
                {" "}
                <div className={classes.whyNoecbImg}>
                  <img
                    src={LandingImage}
                    alt="portrait"
                    className={classes.image}
                  />
                </div>
              </div>
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
            md={6}
            lg={3}
            className={classes.whyNoecbContainer}
          >
            <Paper elevation={0} className={classes.whyNoecbPaper4}>
              <div className={classes.whyNoecbOneImg1}>
                {" "}
                <div className={classes.whyNoecbImg}>
                  <img
                    src={LandingImage}
                    alt="portrait"
                    className={classes.image}
                  />
                </div>
              </div>
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

      {/* INVITATION TO CHAT BAR */}
      <Grid item sm={12} xs={12} className={classes.thinBar}>
        <div className={classes.buttonYellowFatContainer}>
          <Button variant="contained" className={classes.buttonYellowFat}>
            Give us a hit
          </Button>
        </div>
      </Grid>

      {/* BOARD MEMBERS  */}
      <Grid item sm={12} xs={12} className={classes.boardMemberWrapper}>
        <Typography variant="h3" component="h2" className={classes.header3}>
          OUR BOARD LEADERSHIP TEAM
        </Typography>
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          lg={7}
          className={classes.BoardMemberSection}
        >
          <Slider />
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
    fontFamily: theme.palette.font.BebasNeueBold,
  },
  membersCountText: {
    textTransform: "uppercase",
    fontSize: 40,
    fontWeight: 500,
    color: theme.palette.color.darkBlue,
    fontFamily: theme.palette.font.bebasNeue,
    [theme.breakpoints.down(600)]: {
      fontSize: 35,
    },
  },
  number: {
    fontSize: 55,
    fontWeight: 800,
    color: theme.palette.color.yellow,
    fontFamily: theme.palette.font.bebasNeue,
    [theme.breakpoints.down(600)]: {
      fontSize: 45,
    },
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
      margin: "40px auto 40px auto",
    },
  },
  BoardMemberSection: {
    margin: "50px auto 80px auto",
    backgroundColor: theme.palette.color.white,
    [theme.breakpoints.down(600)]: {
      margin: 40,
    },
  },
  multipleSectionsContainer: {
    margin: "50px 50px -13px 50px",
    // backgroundColor: 'red',
    [theme.breakpoints.down(960)]: {
      margin: "30px auto -30px auto",
    },

    [theme.breakpoints.down(421)]: {
      margin: "50px 20px -50px 20px",
    },
    [theme.breakpoints.down(376)]: {
      margin: "50px 5px -50px 5px",
    },
    [theme.breakpoints.down(415)]: {
      marginTop: 30,
      // marginTop: 50,
    },
  },

  subContainerOne: {
    margin: "auto",
    padding: 10,
    [theme.breakpoints.down(960)]: {
      marginBottom: 35,
    },
    [theme.breakpoints.down(376)]: {
      marginBottom: 25,
    },
  },
  textAndButtons: {
    margin: "auto auto -5px auto",
  },
  leftContainer: {
    [theme.breakpoints.down(769)]: {
      marginBottom: -23,
    },
    [theme.breakpoints.down(415)]: {
      marginBottom: 0,
    },
    [theme.breakpoints.down(361)]: {
      marginBottom: 0,
    },
    [theme.breakpoints.down(281)]: {
      marginBottom: 0,
    },
  },

  subContainerTwo: {
    margin: "auto",
    padding: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
  },
  subContainerThree: {
    margin: "auto",
    padding: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
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
    [theme.breakpoints.down(543)]: {
      fontSize: 30,
    },
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
  emptySpace1: {
    display: "none",
    [theme.breakpoints.down(960)]: {
      display: "block",
      height: 20,
    },
  },
  emptySpace: {
    height: 40,
    [theme.breakpoints.down(960)]: {
      height: 30,
    },
    [theme.breakpoints.down(415)]: {
      height: 50,
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
    [theme.breakpoints.down(321)]: {
      marginTop: 20,
    },
  },
  buttonYellowFat: {
    backgroundColor: theme.palette.color.yellow,
    color: theme.palette.color.darkBlue,
    borderRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 40,
    paddingRight: 40,
    fontFamily: theme.palette.font.bebasNeue,
    fontSize: 40,
    marginTop: 40,
    letterSpacing: theme.palette.font.letterSpacingSmall,
    "&:hover": {
      backgroundColor: theme.palette.color.darkBlue,
      color: theme.palette.color.yellow,
    },
    [theme.breakpoints.down(600)]: {
      fontSize: 30,
      marginTop: 27,
    },
    [theme.breakpoints.down(541)]: {
      marginTop: 26,
    },
    [theme.breakpoints.down(415)]: {
      marginTop: 25,
    },
  },
  buttonYellowFatContainer: {
    textAlign: "center",
  },
  thickBar: {
    backgroundColor: theme.palette.color.darkBlue,
    height: 265,
    color: theme.palette.color.white,
    [theme.breakpoints.down(415)]: {
      height: 250,
    },
  },

  thinBar: {
    backgroundColor: theme.palette.primary.main,
    height: 147,
    color: theme.palette.color.white,
    [theme.breakpoints.down(600)]: {
      height: 100,
    },
  },
  whyNoecb: {
    backgroundColor: theme.palette.color.white,
  },
  whyNoecbHeader: {
    // marginTop: -160,
  },
  whyNoecbPaper1: {
    width: "84%",
    margin: "auto",
    backgroundColor: theme.palette.color.yellow,
    color: theme.palette.color.white,
    [theme.breakpoints.down(600)]: {
      width: "100%",
    },
  },
  whyNoecbPaper2: {
    width: "84%",
    margin: "auto",
    backgroundColor: theme.palette.color.red,
    color: theme.palette.color.white,
    [theme.breakpoints.down(600)]: {
      width: "100%",
    },
  },
  whyNoecbPaper3: {
    width: "84%",
    margin: "auto",
    backgroundColor: theme.palette.color.blueGray,
    color: theme.palette.color.white,
    [theme.breakpoints.down(600)]: {
      width: "100%",
    },
  },
  whyNoecbPaper4: {
    width: "84%",
    margin: "auto",
    backgroundColor: theme.palette.color.darkBlue,
    color: theme.palette.color.white,
    [theme.breakpoints.down(600)]: {
      width: "100%",
    },
  },

  whyNoecbOneImg1: {
    width: "100%",
    height: 150,
    backgroundColor: "grey",
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
  whyNoecbContainer: {
    [theme.breakpoints.down(600)]: {
      marginLeft: 10,
      marginRight: 10,
    },
  },
  diversityImage: {
     width: "100%",
    height:  330,
    backgroundColor: "grey",
  },

  boardMemberWrapper: {
    backgroundColor: theme.palette.color.darkWhite,
  },
});
export default withStyles(styles)(LandingPage);
