const styles = (theme) => ({
  formContainer: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down(600)]: {
      margin: "auto",
    },
  },
  form: {
    textAlign: "center",
    backgroundColor: theme.palette.secondary.main,
  },
  image: {
    margin: "40px auto 20px auto",
    width: "55%",
  },
  cssLabel: {
    color: theme.palette.color.white,
  },

  cssOutlinedInput: {
    color: theme.palette.color.white,
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.color.white} !important`,
    },
  },

  cssFocused: {
    color: theme.palette.color.yellow,
  },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: `${theme.palette.color.yellow} !important`,
  },

  textField: {
    margin: "10px auto 10px auto",
    width: "75%",
    color: theme.palette.primary.darkBlue,
    fontFamily: theme.palette.font.HelveticaNeue,
  },
  login: {
    color: theme.palette.color.darkBlue,
    "&:hover": {
      color: theme.palette.color.yellow,
    },
  },

  errorText: {
    margin: "-9px auto 6px auto",
    width: "75%",
    fontSize: 10,
    fontFamily: theme.palette.font.HelveticaNeue,
  },

  button: {
    marginTop: 20,
    marginBottom: 20,
    position: "relative",
    width: "75%",
    height: 60,
    backgroundColor: theme.palette.color.yellow,
    color: theme.palette.color.darkBlue,
    fontFamily: theme.palette.font.HelveticaNeue,
    "&:hover": {
      backgroundColor: theme.palette.color.darkBlue,
      color: theme.palette.color.yellow,
    },
  },

  haveAnAccount: {
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
  },
  forgetEmail: {
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
  },
  blankSpace: {
    marginBottom: 60,
    width: "100%",
  },
  textForm: {
    color: theme.palette.color.yellow,
    fontFamily: theme.palette.font.HelveticaNeue,
    margin: "auto",
    width: "75%",
    textAlign: "left",
  },
  AndCheckbox: {
    display: "flex",
    backgroundColor: "red",
    width: "75%",
    margin: "auto",
    textAlign: "left",
  },
});

export default styles;
