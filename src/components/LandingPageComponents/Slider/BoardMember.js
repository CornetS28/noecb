import React from "react";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

// Images
import Quote from "../../../images/quote.png";

const BoardMember = ({ classes, image, thought, fullname, position, key }) => {
  return (
    <CardActionArea>
      <Grid container item xs={12} sm={12}>
        <Grid item xs={4} sm={4} className={classes.avatarMainWrapper}>
          <CardMedia>
            <Avatar className={classes.boardMemberShipImageSubWrapper}>
              <div edge="start" className={classes.boardMemberShipContainer}>
                <img
                  src={image}
                  alt="logo"
                  className={classes.MemberShipPhoto}
                />
              </div>
            </Avatar>
          </CardMedia>
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardContent className={classes.memberOverViewContainer}>
            <Grid item sm={12} xs={12}>
              <Grid item sm={12} xs={12}>
                <div edge="start" className={classes.quoteContainer}>
                  <img src={Quote} alt="logo" className={classes.quote} />{" "}
                </div>
              </Grid>
            </Grid>
            <h3 className={classes.memberLifeThought}>{thought}</h3>

            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={classes.memberMajor}
            >
              {fullname}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {position}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </CardActionArea>
  );
};

const styles = (theme) => ({
  cardItemsContainer: {
    maxWidth: "100%",
    minHeight: "100",
    borderBottom: "none",
  },
  boardMemberShipImageSubWrapper: {
    background: "#00C8",
    width: "180px",
    height: "180px",
    margin: "80px 20px 40px 100px",
    alignItem: "center",

    backgroundColor: "yellow",
    [theme.breakpoints.down(1556)]: {
      margin: "80px 20px 40px 60px",
    },
    [theme.breakpoints.down(735)]: {
      margin: "80px 20px 40px 35px",
    },
    [theme.breakpoints.down(600)]: {
      margin: "50px 20px 40px 155px",
    },
    [theme.breakpoints.down(559)]: {
      margin: "50px 20px 40px 135px",
    },
    [theme.breakpoints.down(519)]: {
      margin: "50px 20px 40px 115px",
    },
    [theme.breakpoints.down(482)]: {
      margin: "50px 20px 40px 105px",
    },
    [theme.breakpoints.down(419)]: {
      margin: "50px 20px 40px 75px",
    },
    [theme.breakpoints.down(402)]: {
      margin: "50px 20px 40px 65px",
    },
    [theme.breakpoints.down(385)]: {
      margin: "50px 20px 40px 55px",
    },
    [theme.breakpoints.down(360)]: {
      margin: "50px 20px 40px 45px",
    },
    [theme.breakpoints.down(342)]: {
      margin: "50px 20px 40px 40px",
    },
  },

  MemberShipPhoto: {
    width: "100%",
    height: "185px",
  },
  quote: {
    width: "8%",
    marginBottom: 20,
  },

  memberOverViewContainer: {
    margin: "80px 20px 10px auto",
    [theme.breakpoints.down(1556)]: {
      margin: "80px 10px 40px 40px",
    },
    [theme.breakpoints.down(600)]: {
      margin: "auto",
    },
  },
  memberLifeThought: {
    fontSize: 30,
    fontWeight: 800,
    color: theme.palette.color.darkBlue,
    fontFamily: theme.palette.font.BebasNeueBold,
    padding: "auto",
    margin: "0 40px 20px auto",
    letterSpacing: theme.palette.font.letterSpacingBig,
    [theme.breakpoints.down(735)]: {
      fontSize: 23,
      margin: "0 20px auto auto",
    },
    [theme.breakpoints.down(600)]: {
      margin: "auto",
    },

    [theme.breakpoints.down(412)]: {
      fontSize: 20,
    },
  },

  memberMajor: {
    margin: "auto",
    fontFamily: theme.palette.font.BebasNeueBold,
  },
});

export default withStyles(styles)(BoardMember);
