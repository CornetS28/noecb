import React from "react";
import PropTypes from "prop-types";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

// Components
import ContactForm from "./ContactForm";

const Contact = (props) => {
  const { classes } = props;
  return (
    <Grid container sm={12} xs={12} className={classes.contactUsWrapper}>
      <Grid
        container
        sm={10}
        xs={12}
        spacing={6}
        className={classes.contactUsContainer}
      >
        <Grid
          container
          item
          sm={6}
          xs={12}
          className={classes.mediumSectionRight}
        >
          <Grid item sm />
          <Grid
            item
            sm={8}
            xs={12}
            className={classes.contactUsSubContaineLeft}
          >
            <div className={classes.textContainer}>
              <h1 className={classes.header}>
                Contact Us: Duis aute irure dolor
              </h1>
              <p className={classes.contactUsPara}>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit.
              </p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12} />
        </Grid>
        <Grid
          container
          item
          sm={6}
          xs={12}
          className={classes.contactUsSubRightContainer}
        >
          <Grid item sm={9} xs={12} className={classes.contactUsForm}>
            <ContactForm
              subjectId="subject"
              subjectName="subject"
              subjectType="subject"
              subjectLabel="Subject"
              emailId="email"
              emailName="email"
              emailType="email"
              emailLabel="Email"
              messageId="message"
              messageName="message"
              messageType="message"
              messageLabel="Message"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const styles = (theme) => ({
  contactUsContainer: {
    margin: "60px auto 50px auto",
  },
  contactUsSubContaineLeft: {
    margin: "10px auto auto auto",
  },
  header: {
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
    fontSize: "45px",
    marginTop: -20,
    paddingLeft: 10,
    ["@media(max-width: 1508px)"]: {
      fontSize: "35px",
    },
    ["@media(max-width: 1340px)"]: {
      fontSize: "25px",
    },
    ["@media(max-width: 862px)"]: {
      fontSize: "20px",
    },
  },
  textContainer: {
    fontFamily: theme.palette.font.HelveticaNeue,
    width: "100%",
    margin: "auto",
    paddingLeft: 10,
    marginTop: 80,
    ["@media(max-width: 599px)"]: {
      marginTop: -40,
      marginBottom: 40,
    },
    ["@media(max-width: 375px)"]: {
      marginTop: -40,
    },
  },
  contactUsPara: {
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.56",
    letterSpacing: "normal",
    textAlign: "left",
    paddingTop: 10,
    width: "100%",
  },
  contactUsWrapper: {
    backgroundColor: theme.palette.primary.main,
  },
  mediumSectionRight: {
    backgroundColor: theme.palette.primary.main,
  },
  contactUsSubRightContainer: {
    backgroundColor: theme.palette.color.darkBlue,
  },
  contactUsForm: {
    margin: "auto",
  },
});

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
