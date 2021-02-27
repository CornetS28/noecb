/* eslint-disable-line no-useless-computed-key */
import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

// Images
import logo from "../../images/logo.png";
import helpingHand from "../../images/helping-hand1.svg";
import together from "../../images/together.svg";
import bible from "../../images/bible.svg";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const Footer = (props) => {
  const history = useHistory();
  // const currentUser = useSelector((state) => state.auth.currentUser);
  const routeChange = (path) => {
    history.push(path);
  };
  const { classes } = props;

  return (
    <>
      <Divider className={classes.divider} />
      <Grid container spacing={16} className={classes.footerWrapper}>
        <Grid item sm={1} xs={12} />
        <Grid container item sm={10} className={classes.footerContainer}>
          <Grid
            container
            item
            sm={5}
            xs={12}
            className={classes.footerWrapperLeft}
          >
            <Grid item sm={10} xs={12} className={classes.footerWrapperIn2}>
              <div className={classes.footerPara}>
                <p>
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, quae ab illo
                  inventore veritatis et quasi.
                </p>
              </div>
              <div edge="start" className={classes.logoWrapper}>
                <Grid item xs={12} sm={7} className={classes.logoGroup}>
                  <img
                    src={helpingHand}
                    alt="footerLogo"
                    className={classes.footerLogo}
                  />
                  <img
                    src={bible}
                    alt="footerLogo"
                    className={classes.footerLogo}
                  />
                  <img
                    src={together}
                    alt="footerLogo"
                    className={classes.footerLogo}
                  />
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            item
            sm={7}
            xs={12}
            className={classes.footerWrapperRight}
          >
            <Grid item sm={4} xs={12} className={classes.firstParaRight}>
              <div
                className={classes.paraTwo}
                onClick={() => routeChange("/resources")}
              >
                <p className="colorYellow">Resources</p>
              </div>
              <div
                className={classes.paraTwo}
                onClick={() => routeChange("/about")}
              >
                <p className="colorYellow">About</p>
              </div>
              <div
                className={classes.paraTwo}
                onClick={() => routeChange("/social")}
              >
                <p className="colorYellow">Social Talks</p>
              </div>
              <div
                className={classes.paraTwo}
                onClick={() => routeChange("/chat")}
              >
                <p className="colorYellow">Interactions</p>
              </div>

              <div
                className={classes.paraTwo}
                onClick={() => routeChange("/signup")}
              >
                <p className="colorYellow">Become an Member</p>
              </div>
            </Grid>
            <Grid container item sm={8} className={classes.p}>
              <Grid item sm={12} xs={12} className={classes.secondParaRight}>
                <div className={classes.secondParaRightContent}>
                  {" "}
                  <p>For more information</p>
                  <p>please contact us at:</p>
                </div>
                <a
                  href="mailto: corsam28@gmail.com"
                  className={classes.linkToEmail}
                >
                  corsam28@gmail.com
                </a>
              </Grid>

              <Grid item sm={12} xs={12} className={classes.secondParaRight}>
                <div edge="start" className={classes.logoWebWrapper}>
                  <img src={logo} alt="logo" className={classes.logo} />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={1} xs={12} />
        <Grid item sm={12} xs={12}>
          <Divider className={classes.divider} />
          <Grid container className={classes.footerWrapperBottom}>
            <Grid item sm={1} xs={12} />
            <Grid container item sm={10} className={classes.footerContainer2}>
              <Grid container item sm={9} xm={12}>
                <Grid item sm={6} xs={12}>
                  <div className={classes.footerBottomLeft1}>
                    <p>© 2021 NOECB. All right reserved.</p>
                  </div>
                </Grid>
                <Grid item sm={3} xs={12}>
                  <div className={classes.footerBottomLeft2}>
                    <p>
                      <a href="/privacypolicy" className={classes.footerLink}>
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </Grid>

                <Grid item sm={3} xs={12}>
                  <div className={classes.footerBottomLeft3}>
                    <p>
                      <a href="/privacypolicy" className={classes.footerLink}>
                        Terms of Service
                      </a>
                    </p>
                  </div>
                </Grid>
              </Grid>
              <Grid container item sm={3} xm={12} style={{ marginBottom: -20 }}>
                <Grid item sm={2} xs={12} />
                <Grid item sm={4} xs={12} />
                <Grid
                  item
                  sm={6}
                  xs={12}
                  className={classes.footerBottomLeft4PP}
                >
                  <div>
                    <p className={classes.footerBottomLeft4}>Made in Haiti</p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={1} xs={12} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const styles = (theme) => ({
  ...theme.palette.primary,
  ...theme.palette.main,
  footerLink: {
    color: theme.palette.color.gray,
    fontFamily: theme.palette.font.fontFamily,
    fontSize: 15,
  },
  footerPara: {
    fontSize: 22,
    paddingLeft: 20,
    paddingRight: 20,
    width: "90%",
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.fontFamily,
    [theme.breakpoints.down(1155)]: {
      fontSize: 18,
    },
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
  },
  logoGroup: {
    marginLeft: 15,
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(600)]: {
      marginRight: 15,
    },
  },
  footerLogo: {
    paddingLeft: 10,
    width: "20%",
  },

  gridWrapperTwo: {
    color: theme.palette.secondary.main,
    textAlign: "right",
    lineHeight: 1.71,
    paddingRight: 10,
  },
  bottomFooterLink: {
    color: theme.palette.secondary.main,
    display: "flex",
  },

  footerWrapper: {
    height: "30%",
    backgroundColor: theme.palette.primary.main,
  },

  footerContainer: {
    marginTop: 20,
  },
  footerWrapperLeft: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    fontFamily: theme.palette.font.fontFamily,
  },
  footerWrapperRight: {
    color: theme.palette.secondary.main,
  },
  firstParaRight: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontFamily: theme.palette.font.fontFamily,
    textAlign: "right",
    lineHeight: 1.71,
    paddingRight: 10,
  },
  secondParaRight: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontFamily: theme.palette.font.HelveticaNeue,
    textAlign: "right",
    lineHeight: 0.5,
    paddingRight: 10,
  },
  secondParaRightContent: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontFamily: theme.palette.font.HelveticaNeue,
    width: "70%",
    paddingRight: 20,
    float: "right",
    [theme.breakpoints.down(675)]: {
      width: 200,
    },

    [theme.breakpoints.down(600)]: {
      fontSize: 14,
      width: "95%",
      textAlign: "center",
    },
  },
  paraTwo: {
    width: 160,
    margin: "auto",
    color: theme.palette.color.gray,
    fontFamily: theme.palette.font.HelveticaNeue,
    paddingRight: 15,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.color.red,
    },
    [theme.breakpoints.down(1271)]: {
      fontSize: 14,
      width: "100%",
      paddingRight: 5,
    },
    [theme.breakpoints.down(600)]: {
      fontSize: 14,
      width: "50%",
      textAlign: "center",
    },
  },
  logoWebWrapper: {
    [theme.breakpoints.down(600)]: {
      textAlign: "center",
    },
  },
  logo: {
    width: "170px",
    height: "140px",

    [theme.breakpoints.down(600)]: {
      width: "40%",
      height: "200px",
      display: "inline-block",
      margin: "0 auto",
      padding: "auto",
    },
    [theme.breakpoints.down(600)]: {
      height: "140px",
    },
  },

  footerBottomLeft1: {
    fontFamily: theme.palette.font.HelveticaNeue,
    fontSize: 15,
    height: 20,
    color: theme.palette.color.white,
    [theme.breakpoints.down(1541)]: {
      fontSize: 14,
    },
    [theme.breakpoints.down(600)]: {
      textAlign: "center",
    },
  },
  footerBottomLeft2: {
    color: theme.palette.color.white,
    height: 20,
    backgroundColor: theme.palette.primary.main,
    fontFamily: theme.palette.font.fontFamily,
    [theme.breakpoints.down(1541)]: {
      fontSize: 14,
    },
    [theme.breakpoints.down(600)]: {
      textAlign: "center",
    },
  },
  footerBottomLeft3: {
    color: theme.palette.color.white,
    height: 20,
    backgroundColor: theme.palette.primary.main,
    fontFamily: theme.palette.font.fontFamily,
    [theme.breakpoints.down(1541)]: {
      fontSize: 14,
    },
    [theme.breakpoints.down(600)]: {
      textAlign: "center",
    },
  },
  footerLink: {
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
    fontSize: 15,
    "&:hover": {
      color: theme.palette.color.darkBlue,
    },
  },
  footerContainer2: {
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    marginBottom: 13,
  },
  footerBottomTextLeft: {
    backgroundColor: theme.palette.primary.main,
    fontFamily: theme.palette.font.fontFamily,
    color: theme.palette.secondary.main,
    lineHeight: 1.43,
    height: 20,
  },
  footerBottomLeft4: {
    color: theme.palette.color.white,
    backgroundColor: theme.palette.primary.main,
    fontFamily: theme.palette.font.fontFamily,
    fontSize: 15,
    height: 20,
    [theme.breakpoints.down(1079)]: {
      fontSize: 14,
      width: "130%",
    },
    [theme.breakpoints.down(1541)]: {
      fontSize: 14,
      width: "100%",
      marginBottom: 20,
    },
    [theme.breakpoints.down(600)]: {
      textAlign: "center",
    },
  },
  footerWrapperBottom: {
    height: "100%",
  },
  linkToEmail: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.color.darkBlue,
    fontFamily: theme.palette.font.fontFamily,
    width: "70%",
    paddingRight: 20,
    float: "right",
    "&:hover": {
      color: theme.palette.color.yellow,
    },
    [theme.breakpoints.down(660)]: {
      marginRight: 5,
    },
    [theme.breakpoints.down(600)]: {
      fontSize: 14,
      width: "95%",
      textAlign: "center",
      marginBottom: 20,
    },
    [theme.breakpoints.down(376)]: {
      width: "95%",
    },
  },
});
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
