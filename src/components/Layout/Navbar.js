import React, { useState } from "react";
import Link from "react-router-dom/Link";
import PropTypes from "prop-types";
import logo from "../../images/logo.png";
import profile from "../../images/profile.png";

import { NavLink } from "react-router-dom";

// MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { fade, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";

const Navbar = (props) => {
  const [state, setState] = useState({
    achorEl: false,
    MobileMoreAnchorEl: false,
  });
  const [alignment, setAlignment] = React.useState("left");
  const isMobileMenuOpen = Boolean(state.mobileMoreAnchorEl);
  const mobileMenuId = "primary-search-account-menu-mobile";

  const handleMobileMenuClose = () => {
    setState({
      mobileMoreAnchorEl: null,
    });
  };

  const handleMobileMenuOpen = (event) => {
    setState({
      mobileMoreAnchorEl: event.currentTarget,
    });
  };

  const handleAlignment = (newAlignment) => {
    setAlignment(newAlignment);
  };

  const { classes } = props;
  const renderMobileMenu = (
    <Menu
      anchorEl={state.mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className={classes.mobileMenueColor}>
        <Button
          color="inherit"
          component={Link}
          to="/resources"
          activeClassName="navbar__link--active"
          className="navbar__link"
        >
          Resources
        </Button>
      </MenuItem>
      <MenuItem className={classes.mobileMenueColor}>
        <Button
          color="inherit"
          component={Link}
          to="/about"
          activeClassName="navbar__link--active"
          className="navbar__link"
        >
          About
        </Button>
      </MenuItem>
      <MenuItem className={classes.mobileMenueColor}>
        <Button
          color="inherit"
          component={Link}
          to="/social"
          activeClassName="navbar__link--active"
          className="navbar__link"
        >
          Social Talks
        </Button>
      </MenuItem>

      <MenuItem className={classes.mobileMenueColor}>
        <Button
          color="inherit"
          component={Link}
          to="/advocate"
          activeClassName="navbar__link--active"
          className="navbar__link"
        >
          Become an Member
        </Button>
      </MenuItem>

      <MenuItem className={classes.mobileMenueColor}>
        <Button
          color="inherit"
          component={Link}
          to="/toolkits"
          activeClassName="navbar__link--active"
          className="navbar__link"
        >
          Interactions
        </Button>
      </MenuItem>

      <MenuItem className={classes.mobileMenueColor}>
        <Button
          color="inherit"
          component={Link}
          to="/login"
          activeClassName="navbar__link--active"
          className="navbar__link"
        >
          Sign In
        </Button>
      </MenuItem>

      {/* <MenuItem className={classes.mobileMenueColor}>
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </MenuItem> */}
    </Menu>
  );

  return (
    <>
      <div className={classes.navigationWrapper}>
        <AppBar position="fixed">
          <Toolbar className={classes.navbarContainer}>
            <IconButton edge="start" component={Link} to="/">
              <div edge="start" className={classes.logoWrapper}>
                <img src={logo} alt="logo" className={classes.logo} />
              </div>
            </IconButton>
            <Typography variant="h6" className={classes.emptySpot}></Typography>

            <div className={classes.navigationWrapper} />
            <div>
              <Grid className={classes.mainNav}>
                <div
                  className={classes.sectionDesktop}
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <div className="button">
                    <NavLink
                      activeClassName="navbar__link--active"
                      className="navbar__link colorYellow"
                      to="/resources"
                      value="left"
                    >
                      Resources
                    </NavLink>
                  </div>
                  <div className="button">
                    <NavLink
                      color="inherit"
                      to="/about"
                      activeClassName="navbar__link--active"
                      className="navbar__link colorYellow"
                    >
                      About
                    </NavLink>
                  </div>

                  <div className="button">
                    <NavLink
                      activeClassName="navbar__link--active"
                      className="navbar__link colorYellow"
                      to="/social"
                    >
                      Social Talks
                    </NavLink>
                  </div>

                  <div className="button">
                    <NavLink
                      activeClassName="navbar__link--active"
                      className="navbar__link colorYellow"
                      to="/become-a-member"
                    >
                      Become an Member
                    </NavLink>
                  </div>

                  <div className="button">
                    <NavLink
                      activeClassName="navbar__link--active"
                      className="navbar__link colorYellow"
                      to="/chat"
                    >
                      Interactions
                    </NavLink>
                  </div>

                  {/* <div className="button">
                  <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link colorYellow"
                    to="/login"
                  >
                    Sign In
                  </NavLink>
                </div> */}

                  <Grid className={classes.avatarContainer}>
                    <Avatar className={classes.userInitial}>
                      <div edge="start" className={classes.logoWrapper}>
                        <img
                          src={profile}
                          alt="logo"
                          className={classes.photo}
                        />
                      </div>
                    </Avatar>
                  </Grid>

                  {/* <IconButton aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton> */}
                </div>
              </Grid>
              <Grid className={classes.subNav}>
                <div
                  className={classes.sectionDesktop}
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <div className="sub-nav-button">
                    <NavLink
                      activeClassName="navbar__link--active"
                      className="navbar__link colorYellow"
                      to="/contest"
                    >
                      Care & Contest
                    </NavLink>
                  </div>
                  <Grid className="care-an-support-desc">
                    <p>
                      Sed ut perspiciatis, unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam eaque ipsa, quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt, explicabo. Nemo
                      enim ipsam voluptatem, quia voluptas sit, aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos,
                      qui ratione voluptatem sequi nesciunt, neque porro
                      quisquam est, qui dolorem ipsum, quia dolor sit amet,
                      consectetur, adipisci[ng] velit, sed quia non numquam [do]
                      eius modi tempora inci[di]dunt, ut labore et dolore magnam
                      aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                      nostrum exercitationem ullam corporis suscipit laboriosam,
                      nisi ut aliquid ex ea commodi consequatur? Quis autem vel
                      eum iure reprehenderit, qui in ea voluptate velit esse,
                      quam nihil molestiae consequatur, vel illum, qui dolorem
                      eum fugiat, quo voluptas nulla pariatur?
                    </p>
                  </Grid>

                  <div className="sub-nav-button">
                    <NavLink
                      activeClassName="navbar__link--active"
                      className="navbar__link colorYellow"
                      to="/contestd3"
                    >
                      sdjksdjks
                    </NavLink>
                  </div>
                  <div className="sub-nav-button">
                    <NavLink
                      activeClassName="navbar__link--active"
                      className="navbar__link colorYellow"
                      to="/contestd2"
                    >
                      balala
                    </NavLink>
                  </div>
                  <Grid className="care-an-support-desc1">
                    <p>
                      Sed ut perspiciatis, unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam eaque ipsa, quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt, explicabo. Nemo
                      enim ipsam voluptatem, quia voluptas sit, aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos,
                      qui ratione voluptatem sequi nesciunt, neque porro
                      quisquam est, qui dolorem ipsum, quia dolor sit amet,
                      consectetur, adipisci[ng] velit, sed quia non numquam [do]
                      eius modi tempora inci[di]dunt, ut labore et dolore magnam
                      aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                      nostrum exercitationem ullam corporis suscipit laboriosam,
                      nisi ut aliquid ex ea commodi consequatur? Quis autem vel
                      eum iure reprehenderit, qui in ea voluptate velit esse,
                      quam nihil molestiae consequatur, vel illum, qui dolorem
                      eum fugiat, quo voluptas nulla pariatur?
                    </p>
                  </Grid>
                  <div className="sub-nav-button">
                    <NavLink
                      activeClassName="navbar__link--active"
                      className="navbar__link colorYellow"
                      to="/contestdw"
                    >
                      sdjksdjks
                    </NavLink>
                  </div>
                  <div className="sub-nav-button">
                    <NavLink
                      activeClassName="navbar__link--active"
                      className="navbar__link colorYellow"
                      to="/contestde"
                    >
                      sdjksdjks
                    </NavLink>
                  </div>
                </div>
              </Grid>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>

      <Grid item sm={12} xs={12}>
        <Divider className={classes.divider} />
      </Grid>
    </>
  );
};

const styles = (theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  navigationWrapper: {
    flexGrow: 1,
  },
  emptySpot: {
    flexGrow: 1,
  },
  navbarContainer: {
    marginLeft: 40,
    marginRight: 40,
  },
  logo: {
    width: "125px",
    height: "100px",
    marginTop: -13,
    marginBottom: -25,
  },
  mobileMenueColor: {
    backgroundColor: theme.palette.color.lemonGreen,
  },
  subNav: {
    marginLeft: 5,
    marginTop: 0,
  },

  userInitial: {
    background: "#00C8",
    width: "50px",
    height: "50px",
    marginTop: "10px",
  },
  photo: {
    width: "100%",
    height: "50px",
  },
});

Navbar.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);



