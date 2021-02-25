import React from "react";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";

// Utils Stuff
import Theme from "../../utils/theme";
import { contactUsSchema } from "../../utils/validators";

const defaultValues = {
  subject: "",
  email: "",
  message: "",
};

const ContactUs = (props) => {
  const { register, errors, handleSubmit, reset } = useForm({
    resolver: yupResolver(contactUsSchema),
  });
  const handleContactUs = async (data) => {
    console.log("form data:", data);
    // try {
    //   reset(defaultValues);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  const {
    classes,
    subjectId,
    emailId,
    messageId,
    subjectName,
    emailName,
    messageName,
    subjectType,
    emailType,
    messageType,
    subjectLabel,
    emailLabel,
    messageLabel,
  } = props;
  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(handleContactUs)}
    >
      <TextField
        id={subjectId}
        name={subjectName}
        type={subjectType}
        label={subjectLabel}
        inputRef={register}
        error={!!errors.subject}
        className={classes.textField}
        fullWidth
        multiline
        variant="outlined"
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
      />
      <FormHelperText className={classes.errorText} error>
        {!!errors.subject && errors.subject.message}
      </FormHelperText>
      <TextField
        id={emailId}
        name={emailName}
        type={emailType}
        label={emailLabel}
        inputRef={register}
        error={!!errors.email}
        className={classes.textField}
        fullWidth
        multiline
        variant="outlined"
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
      />
      <FormHelperText className={classes.errorText} error>
        {!!errors.email && errors.email.message}
      </FormHelperText>

      <TextField
        id={messageId}
        name={messageName}
        type={messageType}
        label={messageLabel}
        multiline
        rows={6}
        variant="outlined"
        inputRef={register}
        error={!!errors.message}
        className={classes.textField}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
      />
      <FormHelperText className={classes.errorText} error>
        {!!errors.message && errors.message.message}
      </FormHelperText>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.contactUsButton}
      >
        Submit
        {/* {isLoading ? "Submiting..." : "Submit"} */}
      </Button>
    </form>
  );
};

const styles = (theme) => ({
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
    margin: "10px auto 10px 10px",
    width: "95%",
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
  },

  contactUsButton: {
    marginTop: 10,
    marginBottom: 20,
    position: "relative",
    width: "95%",
    height: 60,
    marginLeft: 10,
    backgroundColor: theme.palette.color.yellow,
    color: theme.palette.color.darkBlue,
    fontFamily: theme.palette.font.HelveticaNeue,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.color.white,
    },
  },
  errorText: {
    margin: "-9px auto 6px auto",
    width: "95%",
    fontSize: 10,
  },
});

ContactUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactUs);
