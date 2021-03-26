const styles = (theme) => ({
  Page404Wrapper: {
    backgroundColor: theme.palette.primary.main,
  },
  page404Container: {
    margin: "60px auto 50px auto",
    [theme.breakpoints.down(1330)]: {
      margin: "auto auto auto auto",
    },
  },
  page404: {
    margin: "10px auto auto auto",
    [theme.breakpoints.down(1330)]: {
      margin: "10% auto 20% auto",
    },
    [theme.breakpoints.down(991)]: {
      marginTop: "20%",
    },
    [theme.breakpoints.down(783)]: {
      margin: "30% auto 20% auto",
    },
    [theme.breakpoints.down(600)]: {
      margin: "auto",
    },
  },
  error404Text: {
    margin: "10px auto auto auto",
    [theme.breakpoints.down(1330)]: {
      margin: "10% auto 20% auto",
    },
    [theme.breakpoints.down(990)]: {
      margin: "15% auto 20% auto",
    },
    [theme.breakpoints.down(783)]: {
      marginBottom: "30%",
    },
    [theme.breakpoints.down(600)]: {
      margin: "auto auto 6% auto",
    },
  },
  dogContainer: {},
  error404: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.color.red,
    textAlign: "center",
    margin: "30% auto 109px auto",
    fontWeight: "bold",
    fontSize: "18px",
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: theme.palette.font.HelveticaNeue,
    [theme.breakpoints.down(1428)]: {
      margin: "20% auto auto auto",
      paddingBottom: 10,
    },

    [theme.breakpoints.down(600)]: {
      margin: "auto auto auto",
    },
  },
  error404TextYellow: {
    color: theme.palette.color.yellow,
    [theme.breakpoints.down(415)]: {
      fontSize: 16,
    },
  },
  dogImage: {
    width: "100%",
  },
});

export default styles;