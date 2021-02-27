import React from 'react';
import PropTypes from "prop-types";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";


// Components
import ContactUs from '../components/ContactUs/ContactUs';

// Images
import LandingImage from "../images/mainHomeImage.png";



const About = ({classes}) => {
  return (
    <Grid
      container
      className={classes.aboutPageWrapper}
    
    >
      <Grid container>
        <Grid item sm />
        <Grid item sm={12} xs={12}>
          <img
            src={LandingImage}
            alt="portrait"
            className={classes.mainImage}
          />
        </Grid>

        <Grid
          container
          item
          sm={12}
          xs={12}
          className={classes.textOnImageWrapper}
        >
          <Grid container item sm={6} xs={12}>
            <Grid
              item
              sm={9}
              xs={12}
              style={{
                paddingRight: 30,
                position: "relative",
              }}
            >
              <h1 className={classes.displayHeadlineOnImage}>
                Church Of Bible understanding bsdfdv saf kdfvdkf fdvd v
                fkvfdkvdvfdkv
              </h1>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm />
      </Grid>
      {/*--- Contact us form section----*/}
      <ContactUs />
    </Grid>
  );
}

const styles = (theme) => ({
  imgContainer: {
    width: "100%",
    position: "relative",
  },
  mainImage: {
    margin: "auto",
    width: "100%",
    position: "aboslute",
    objectFit: "contain",
    backgroundSize: "contain",
    // filter:' grayscale(60%)',
    filter: "brightness(0.5)",
  },
  image: {
    position: "aboslute",
    width: "100%",
    height: "780px",
    objectFit: "contain",
    backgroundSize: "contain",

    ["@media (max-width: 1679px)"]: {
      height: "680px",
    },
    ["@media (max-width: 1605px)"]: {
      height: "675px",
    },
    ["@media (max-width: 1470px)"]: {
      height: "575px",
    },
    ["@media (max-width: 1453px)"]: {
      height: "580px",
    },
    ["@media (max-width: 1358px)"]: {
      height: "530px",
    },
    ["@media (max-width: 1246px)"]: {
      height: "500px",
    },
    ["@media (max-width: 1190px)"]: {
      height: "490px",
    },
    ["@media (max-width: 1158px)"]: {
      height: "420px",
    },
    ["@media (max-width: 979px)"]: {
      height: "400px",
    },
    ["@media (max-width: 932px)"]: {
      height: "380px",
    },
    ["@media (max-width: 878px)"]: {
      height: "340px",
    },

    ["@media (max-width: 773px)"]: {
      height: "300px",
    },
    ["@media (max-width: 698px)"]: {
      height: "250px",
    },
    ["@media (max-width: 599px)"]: {
      width: "37em",
      height: "250px",
    },
    ["@media (max-width: 575px)"]: {
      width: "35em",
      height: "240px",
    },
    ["@media (max-width: 555px)"]: {
      width: "35em",
      height: "220px",
    },
    ["@media (max-width: 526px)"]: {
      width: "34em",
      height: "200px",
    },
    ["@media (max-width: 508px)"]: {
      width: "32em",
      height: "200px",
    },
    ["@media (max-width: 508px)"]: {
      width: "30em",
      height: "200px",
    },
    ["@media (max-width: 443px)"]: {
      width: "27em",
      height: "200px",
    },

    ["@media (max-width: 375px)"]: {
      width: "24em",
      height: "160px",
    },
  },
  textOnImageWrapper: {
    position: "absolute",
    top: "27%",
    left: "26px",
    margin: "auto",
    width: "95%",
    paddingLeft: 10,
    [theme.breakpoints.down(1470)]: {
      top: "27%",
    },
    [theme.breakpoints.down(1158)]: {
      top: "20%",
    },
    [theme.breakpoints.down(974)]: {
      top: "23%",
    },
    [theme.breakpoints.down(936)]: {
      top: "23%",
    },
    [theme.breakpoints.down(879)]: {
      top: "20%",
    },
    [theme.breakpoints.down(871)]: {
      top: "18%",
    },
    [theme.breakpoints.down(788)]: {
      top: "19%",
    },
    [theme.breakpoints.down(781)]: {
      top: "23%",
    },
    [theme.breakpoints.down(774)]: {
      top: "20%",
    },
    [theme.breakpoints.down(698)]: {
      top: "17%",
    },
    [theme.breakpoints.down(613)]: {
      top: "15%",
    },
    [theme.breakpoints.down(600)]: {
      top: "17%",
    },
    [theme.breakpoints.down(421)]: {
      top: "18%",
      width: "85%",
    },

    [theme.breakpoints.down(376)]: {
      top: "18%",
      marginTop: 50,
    },
    [theme.breakpoints.down(374)]: {
      top: "12%",
      marginTop: 50,
    },
  },
  displayHeadlineOnImage: {
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
    paddingLeft: 10,
    marginTop: 20,
    fontStyle: "normal",
    fontSize: "48px",
    [theme.breakpoints.down(1695)]: {
      fontSize: "38px",
    },
    [theme.breakpoints.down(1470)]: {
      fontSize: "24px",
    },

    [theme.breakpoints.down(948)]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down(746)]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down(600)]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down(467)]: {
      margin: "auto",
    },
    [theme.breakpoints.down(436)]: {
      fontSize: "10px",
    },
  },
});

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
