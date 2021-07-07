import React from "react";
import PropTypes from "prop-types";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// Images
import LandingImage from "../../images/mainHomeImage.png";
import DiversityPic from "../../images/diversityPic.png";

// Components
import Slider from "../../components/LandingPageComponents/Slider/Slider";
import Diversity from "../../components/LandingPageComponents/Diversity";
import Purpose from "../../components/LandingPageComponents/Purpose";

// Styles
import styles from "./Styles";

// Utils
import DB from "../../utils/dbSchema";

const LandingPage = (props) => {
  const { classes } = props;
  return (
    <Grid container className={classes.landingPageWrapper}>
      <Grid container>
        <Grid item sm />
        <Grid item sm={12} xs={12}>
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
                    Duis aute irure dolor in reprehenderit in voluptate
                    velitullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velitullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit.
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
              className={classes.diversityContainer}
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
              title={DB.diversity[0].title}
              summary={DB.diversity[0].summary}
              buttonOne="something"
              buttonTwo="something1"
              buttonThree="something2"
            />
            <Diversity
              title={DB.diversity[1].title}
              summary={DB.diversity[1].summary}
              buttonOne="something"
              buttonTwo="something1"
              buttonThree="something2"
            />
            <Diversity
              title={DB.diversity[2].title}
              summary={DB.diversity[2].summary}
              buttonOne="something"
              buttonTwo="something1"
              buttonThree="something2"
            />
            <Diversity
              title={DB.diversity[3].title}
              summary={DB.diversity[3].summary}
              buttonOne="something"
              buttonTwo="something1"
              buttonThree="something2"
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

        {/* PURPOSE */}
        <Grid container item sm={8} xs={12} className={classes.subSection2}>
          <Purpose
            paperColor={classes.paperYellow}
            purposeImage={DB.purpose[0].image}
            header={DB.purpose[0].header}
            description={DB.purpose[0].description}
          />
          <Purpose
            paperColor={classes.paperRed}
            purposeImage={DB.purpose[1].image}
            header={DB.purpose[1].header}
            description={DB.purpose[1].description}
          />

          <Purpose
            paperColor={classes.paperBlueGrey}
            purposeImage={DB.purpose[2].image}
            header={DB.purpose[2].header}
            description={DB.purpose[2].description}
          />
          <Purpose
            paperColor={classes.paperBlue}
            purposeImage={DB.purpose[3].image}
            header={DB.purpose[3].header}
            description={DB.purpose[3].description}
          />
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

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LandingPage);
