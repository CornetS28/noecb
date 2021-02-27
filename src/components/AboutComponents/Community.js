import React from "react";
import PropTypes from "prop-types";

// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

// Images
import CommunityImg from "../../images/footballfemme.jpg";

const Community = (props) => {
   const {
     classes,
    image, 
    title, 
    briefDescription, 
   } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <div className={classes.cardMedia}>
          <img src={image} className={classes.image} />
        </div>

        <CardContent className={classes.contentWrappper}>
          <Typography
            color="inherit"
            variant="h4"
            className={classes.communityHeaderText}
          >
            {title}
          </Typography>
          <Typography color="inherit" className={classes.communityBriePara}>
            {briefDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.cardButton}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
Community.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = (theme) => ({
  card: {
    backgroundColor: theme.palette.color.yellow,

    width: "100%",
  },
  cardMedia: {
    border: `1px solid ${theme.palette.color.darkBlue}`,
    backgroundColor: theme.palette.color.preloadColor,
    height: "265px",
    position: "relative",

    [theme.breakpoints.down(1680)]: {
      height: "230px",
    },
    [theme.breakpoints.down(1662)]: {
      height: "210px",
    },
    [theme.breakpoints.down(1515)]: {
      height: "195px",
    },
    [theme.breakpoints.down(1416)]: {
      height: "185px",
    },
    [theme.breakpoints.down(1343)]: {
      height: "170px",
    },
    [theme.breakpoints.down(1248)]: {
      height: "160px",
    },

    [theme.breakpoints.down(1186)]: {
      height: "150px",
    },

    [theme.breakpoints.down(1120)]: {
      height: "140px",
    },

    [theme.breakpoints.down(1044)]: {
      height: "130px",
    },
    [theme.breakpoints.down(980)]: {
      height: "120px",
    },

    [theme.breakpoints.down(933)]: {
      height: "115px",
    },
    [theme.breakpoints.down(888)]: {
      height: "105px",
    },

    [theme.breakpoints.down(819)]: {
      height: "95px",
    },
    [theme.breakpoints.down(755)]: {
      height: "90px",
    },
    [theme.breakpoints.down(715)]: {
      height: "85px",
    },
    [theme.breakpoints.down(700)]: {
      height: "80px",
      // width: "92%",
    },
    [theme.breakpoints.down(676)]: {
      height: "77px",
    },
    [theme.breakpoints.down(664)]: {
      // width: "90%",
      height: "71px",
    },
    [theme.breakpoints.down(600)]: {
      height: "275px",
      // width: "99%",
    },
    [theme.breakpoints.down(552)]: {
      height: "260px",
    },
    [theme.breakpoints.down(522)]: {
      height: "240px",
    },
    [theme.breakpoints.down(498)]: {
      height: "220px",
    },
    [theme.breakpoints.down(464)]: {
      height: "210px",
    },
    [theme.breakpoints.down(459)]: {
      height: "205px",
    },
    [theme.breakpoints.down(417)]: {
      height: "190px",
    },
    [theme.breakpoints.down(388)]: {
      height: "180px",
    },
    [theme.breakpoints.down(376)]: {
      height: "170px",
    },
    [theme.breakpoints.down(346)]: {
      height: "160px",
    },
  },
  image: {
    margin: "auto",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.color.yellow,
    backgroundSize: "contain",
    // objectFit: "contain",
  },
  cardButton: {
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
    paddingRight: "2%",
  },
  contentWrappper: {
    height: 200,
    overflow: "hidden",
  },
  communityHeaderText: {
    fontWeight: "bold",
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
    [theme.breakpoints.down(1777)]: {
      fontSize: 26,
    },
    [theme.breakpoints.down(1491)]: {
      fontSize: 18,
    },
  },
  communityBriePara: {
    paddingTop: "3%",
    color: theme.palette.color.darkBlue,
    fontFamily: theme.palette.font.HelveticaNeue,
  },
});
export default withStyles(styles)(Community);
