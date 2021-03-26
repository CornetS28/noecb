const styles = (theme) => ({
  navigationWrapper: {
    flexGrow: 1,
  },
  navbarContainer: {
    marginLeft: 70,
    marginRight: 70,
    [theme.breakpoints.down(965)]: {
      marginLeft: 10,
      marginRight: 30,
    },
    [theme.breakpoints.down(600)]: {
      marginLeft: 5,
      marginRight: 20,
    },
    [theme.breakpoints.down(415)]: {
      marginLeft: 2,
      marginRight: 5,
    },
    [theme.breakpoints.down(376)]: {
      marginLeft: 0,
      marginRight: 5,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up(865)]: {
      display: "flex",
      margin: "auto",
      width: 900,
      marginTop: -1,
      justifyContent: "space-between",
      [theme.breakpoints.down(1409)]: {
        width: 850,
      },
      [theme.breakpoints.down(1304)]: {
        marginTop: 5,
      },

      [theme.breakpoints.down(1285)]: {
        width: 750,
      },
      [theme.breakpoints.down(1165)]: {
        width: 650,
      },
      [theme.breakpoints.down(1121)]: {
        width: 600,
      },
      [theme.breakpoints.down(1015)]: {
        width: 550,
      },
    },
  },
  sectionDesktopSubNav: {
    display: "none",
    [theme.breakpoints.up(865)]: {
      display: "flex",
      margin: "auto",
      width: 700,
      justifyContent: "space-between",
      [theme.breakpoints.down(1409)]: {
        width: 600,
      },
      [theme.breakpoints.down(1285)]: {
        width: 500,
      },
    },
  },
  avatarContainer: {
    marginLeft: 50,
    [theme.breakpoints.down(865)]: {
      display: "none",
    },
  },
  avatarContainerMobile: {
    marginLeft: 50,
  },
  emptyHorizontalSpace: {
    flexGrow: 1,
    [theme.breakpoints.up(860)]: {
      display: "none",
    },
  },
  sectionMobile: {
    display: "flex",
    float: "right",
    [theme.breakpoints.up(865)]: {
      display: "none",
    },
  },
  logo: {
    width: "125px",
    height: "100px",
    marginTop: -13,
    marginBottom: -25,
    marginLeft: -25,
  },

  mobileMenueColor: {
    backgroundColor: theme.palette.secondary.main,
  },

  subNav: {
    margin: " -17px auto auto -120px",
  },

  userImages: {
    background: "#00C8",
    width: "65px",
    height: "65px",
    marginTop: "5px",
  },
  photo: {
    width: "100%",
    height: "66px",
    paddingTop: 5,
    objectFit: "cover",
  },
  menuMobile: {},
  mobileMenueColor: {
    backgroundColor: theme.palette.color.darkBlue,
    color: theme.palette.color.yellow,
  },
});

export default styles;
