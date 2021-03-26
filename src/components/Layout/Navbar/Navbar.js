import React, { useState } from "react";
import Link from "react-router-dom/Link";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// Images
import logo from "../../../images/logo.png";
import profile from "../../../images/profile.png";

// Styles
import styles from "./Styles";

// MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";

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
      style={{ color: "#000000" }}
    >
      <MenuItem className={classes.mobileMenueColor}>
        <Grid className={classes.avatarContainerMobile}>
          <Avatar className={classes.userImages}>
            <div edge="start" className={classes.logoWrapper}>
              <img src={profile} alt="logo" className={classes.photo} />
            </div>
          </Avatar>
        </Grid>
      </MenuItem>
      <MenuItem className={classes.mobileMenueColor}>
        <Button
          color="inherit"
          component={Link}
          to="/archives"
          activeClassName="navbar__link--active"
          className="navbar__link"
        >
          Archives
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
            <div style={{ display: "column", flexGrow: 1 }}>
              <Grid container item sm={12} style={{ display: "flex" }}>
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
                      to="/archives"
                      value="left"
                    >
                      Archives
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
                </div>

                <Grid className={classes.avatarContainer}>
                  <Avatar className={classes.userImages}>
                    <div edge="start" className={classes.logoWrapper}>
                      <img src={profile} alt="logo" className={classes.photo} />
                    </div>
                  </Avatar>
                </Grid>
              </Grid>

              <Grid className={classes.subNav}>
                <div
                  className={classes.sectionDesktopSubNav}
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

            <div className={classes.emptyHorizontalSpace} />
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
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

Navbar.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
