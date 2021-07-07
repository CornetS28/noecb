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
    fontFamily: theme.palette.font.HelveticaNeue,
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
  diversityContainer: {
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
  paperYellow: {
    width: "84%",
    margin: "auto",
    backgroundColor: theme.palette.color.yellow,
    color: theme.palette.color.white,
    [theme.breakpoints.down(600)]: {
      width: "100%",
    },
  },
  paperRed: {
    width: "84%",
    margin: "auto",
    backgroundColor: theme.palette.color.red,
    color: theme.palette.color.white,
    [theme.breakpoints.down(600)]: {
      width: "100%",
    },
  },
  paperBlueGrey: {
    width: "84%",
    margin: "auto",
    backgroundColor: theme.palette.color.blueGray,
    color: theme.palette.color.white,
    [theme.breakpoints.down(600)]: {
      width: "100%",
    },
  },
  paperBlue: {
    width: "84%",
    margin: "auto",
    backgroundColor: theme.palette.color.darkBlue,
    color: theme.palette.color.white,
    [theme.breakpoints.down(600)]: {
      width: "100%",
    },
  },
  image: {
    margin: "auto",
    flexShrink: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  diversityImage: {
    width: "100%",
    height: 330,
    backgroundColor: "grey",
  },

  boardMemberWrapper: {
    backgroundColor: theme.palette.color.darkWhite,
  },
});

export default styles;