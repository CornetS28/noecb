const styles = (theme) => ({
  aboutPageWrapper: {
    backgroundColor: theme.palette.secondary.main,
  },
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

  subSection: {
    margin: "50px auto 50px auto",
  },

  arrowForward: {
    marginBottom: -2,
  },
  contentWrappper: {
    height: 200,
  },
  modal: {
    display: "flex",
    paddingTop: 250,
    justifyContent: "center",
    backgroundColor: "rgba(192, 191, 189, 0.103)",
    [theme.breakpoints.down(415)]: {
      paddingTop: 120,
    },
  },
  modalWrapper: {
    backgroundColor: theme.palette.color.darkBlue,
    height: 300,
    borderRadius: 5,
  },

  // Winners
  header3: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontFamily: theme.palette.font.bebasNeue,
    fontStyle: "bold",
    textAlign: "center",
    marginBottom: 20,
    width: "100%",
    letterSpacing: theme.palette.font.letterSpacingBig,
    [theme.breakpoints.down(543)]: {
      fontSize: 30,
    },
  },
  closeButton: {
    position: "absolute",
    left: "90%",
    top: "6%",
    color: "red",
    cursor: "pointer",
    [theme.breakpoints.down(600)]: {
      left: "89%",
    },
    [theme.breakpoints.down(512)]: {
      left: "87.5%",
    },
    [theme.breakpoints.down(512)]: {
      left: "86%",
      top: "4%",
    },
  },
  dialogueEditHeader: {
    marginLeft: 10,
    color: theme.palette.color.darkBlue,
  },
});

export default styles;
