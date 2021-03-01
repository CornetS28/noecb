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
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const Winners = (props) => {
  const { classes, winnerImage, speech, header, readMore, link, key } = props;
  return (
    <Grid container item xs={12} sm={12} md={6} lg={6} key={key}>
      <Grid container item xs={12} sm={11}>
        <Card className={classes.card}>
          <CardActionArea>
            <Grid container>
              <Grid item xs={7} sm={7}>
                <a target="_blank" rel="noreferrer" href={link}>
                  <div className={classes.cardMedia}>
                    <img src={winnerImage} className={classes.image} />
                  </div>
                </a>
              </Grid>
              <Grid item xs={5} sm={5}>
                <CardContent className={classes.contentWrappper}>
                  <Typography variant="h6" className={classes.winnerHeaderText}>
                    {header}
                  </Typography>
                  <Divider className={classes.divider} />
                  <Typography color="inherit" className={classes.winnerPara}>
                    {speech}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button size="small" className={classes.cardButton}>
                    <a target="_blank" rel="noreferrer" href={link}>
                      {readMore}
                    </a>
                  </Button>
                </CardActions>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

const styles = (theme) => ({
  card: {
    backgroundColor: theme.palette.color.darkBlue,
    width: "100%",
    height: "265px",
    [theme.breakpoints.down(1680)]: {
      height: "240px",
    },
    [theme.breakpoints.down(1544)]: {
      height: "220px",
    },
    [theme.breakpoints.down(1433)]: {
      height: "200px",
    },
    [theme.breakpoints.down(1285)]: {
      height: "180px",
    },
    [theme.breakpoints.down(1185)]: {
      height: "170px",
    },
    [theme.breakpoints.down(960)]: {
      height: "265px",
    },
    [theme.breakpoints.down(852)]: {
      height: "245px",
    },
    [theme.breakpoints.down(770)]: {
      height: "225px",
    },
    [theme.breakpoints.down(675)]: {
      height: "200px",
    },
    [theme.breakpoints.down(624)]: {
      height: "180px",
    },
    [theme.breakpoints.down(600)]: {
      height: "265px",
    },
    [theme.breakpoints.down(550)]: {
      height: "245px",
    },
    [theme.breakpoints.down(513)]: {
      height: "225px",
    },
    [theme.breakpoints.down(415)]: {
      height: "190px",
    },
    [theme.breakpoints.down(376)]: {
      height: "170px",
    },
  },
  cardMedia: {
    border: `1px solid ${theme.palette.color.darkBlue}`,
    height: "265px",
    position: "relative",
    [theme.breakpoints.down(1680)]: {
      height: "240px",
    },
    [theme.breakpoints.down(1544)]: {
      height: "220px",
    },
    [theme.breakpoints.down(1433)]: {
      height: "200px",
    },
    [theme.breakpoints.down(1285)]: {
      height: "180px",
    },
    [theme.breakpoints.down(1185)]: {
      height: "170px",
    },
    [theme.breakpoints.down(960)]: {
      height: "265px",
    },
    [theme.breakpoints.down(852)]: {
      height: "245px",
    },
    [theme.breakpoints.down(770)]: {
      height: "225px",
    },
    [theme.breakpoints.down(675)]: {
      height: "200px",
    },
    [theme.breakpoints.down(624)]: {
      height: "180px",
    },
    [theme.breakpoints.down(600)]: {
      height: "265px",
    },
    [theme.breakpoints.down(550)]: {
      height: "245px",
    },
    [theme.breakpoints.down(513)]: {
      height: "225px",
    },
    [theme.breakpoints.down(415)]: {
      height: "190px",
    },
    [theme.breakpoints.down(376)]: {
      height: "170px",
    },
  },
  contentWrappper: {
    height: 200,
    overflow: "hidden",
    [theme.breakpoints.down(1680)]: {
      height: "170px",
    },
    [theme.breakpoints.down(1544)]: {
      height: "150px",
    },
    [theme.breakpoints.down(1433)]: {
      height: "130px",
    },
    [theme.breakpoints.down(1285)]: {
      height: "120px",
    },
    [theme.breakpoints.down(1185)]: {
      height: "110px",
    },
    [theme.breakpoints.down(960)]: {
      height: "200px",
    },
    [theme.breakpoints.down(852)]: {
      height: "180px",
    },
    [theme.breakpoints.down(770)]: {
      height: "160px",
    },
    [theme.breakpoints.down(675)]: {
      height: "135px",
    },
    [theme.breakpoints.down(624)]: {
      height: "120px",
    },
    [theme.breakpoints.down(600)]: {
      height: "200px",
    },
    [theme.breakpoints.down(550)]: {
      height: "180px",
    },
    [theme.breakpoints.down(513)]: {
      height: "160px",
    },
    [theme.breakpoints.down(415)]: {
      height: "130px",
    },
    [theme.breakpoints.down(376)]: {
      height: "110px",
    },
  },
  winnerHeaderText: {
    fontWeight: "bold",
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
    [theme.breakpoints.down(1680)]: {
      fontSize: 16,
    },
    [theme.breakpoints.down(1285)]: {
      fontSize: 13,
    },
    [theme.breakpoints.down(415)]: {
      fontSize: 11,
    },
    [theme.breakpoints.down(997)]: {
      fontSize: 10,
    },
    [theme.breakpoints.down(960)]: {
      fontSize: 20,
    },
    [theme.breakpoints.down(852)]: {
      fontSize: 16,
    },
    [theme.breakpoints.down(376)]: {
      fontSize: 10,
    },
  },
  image: {
    margin: "auto",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.color.yellow,
    backgroundSize: "contain",
    objectFit: "contain",
  },
  divider: {
    backgroundColor: theme.palette.color.red,
    marginBottom: 10,
  },
  cardButton: {
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
    paddingRight: "2%",
    marginTop: -10,
    [theme.breakpoints.down(415)]: {
      fontSize: 11,
    },
  },

  winnerPara: {
    color: theme.palette.color.yellow,
    fontFamily: theme.palette.font.HelveticaNeue,
    [theme.breakpoints.down(1680)]: {
      fontSize: 12,
    },
    [theme.breakpoints.down(415)]: {
      fontSize: 11,
    },
  },
});

Winners.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Winners);
