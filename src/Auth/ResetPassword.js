import React, { useState } from "react";
import PropTypes from "prop-types";
import Theme from "../utils/theme";

import { yupResolver } from "@hookform/resolvers/yup";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import { passwordResetAction } from "../redux/actions/auth";
import { passwordResetSchema } from "../utils/validators";

// Images
import AppIcon from "../images/logo.png";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import FormHelperText from "@material-ui/core/FormHelperText";

const defaultValues = {
  email: "",
};
const ResetPassword = (props) => {
  const [message, setMessage] = useState("");

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(passwordResetSchema),
  });

  const handleResetPassword = async (data) => {
    try {
      await resetPassword(data);
      props.history.push("/password-verification");
      reset(defaultValues);
    } catch (e) {
      console.log(e);
      const resMessage =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      setMessage(resMessage);
    }
  };

  const { classes, resetPassword } = props;

  return (
    <Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sm>
        <img src={AppIcon} alt="app-logo" className={classes.image} />
        <div className={classes.emailText}>
          <h1>Reset Password</h1>
        </div>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(handleResetPassword)}
        >
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            error={!!errors.email}
            className={classes.textField}
            fullWidth
            multiline
            variant="outlined"
            inputRef={register}
            InputLabelProps={{
              style: {
                color: Theme.palette.color.gray,
                fontFamily: Theme.palette.font.fontFamily,
              },
            }}
            InputProps={{
              classes: {
                input: classes.multilineColor,
              },
            }}
          />
          <FormHelperText error className={classes.errorText}>
            {!!errors.email && errors.email.message}
            {message}
          </FormHelperText>
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            // disabled={loading}
          >
            Send Password Reset Code
          </Button>
        </form>
        <div className={classes.blankSpace}></div>
      </Grid>

      <Grid item sm />
    </Grid>
  );
};

const styles = (theme) => ({
  form: {
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
    fontFamily: theme.palette.font.fontFamily,
  },
  image: {
    margin: "40px auto 20px auto",
    width: "75%",
  },
  emailText: {
    color: theme.palette.color.gray,
    fontFamily: theme.palette.font.fontFamily,
    width: "85%",
    margin: "auto",
  },
  textField: {
    margin: "10px auto 10px auto",
    width: "75%",
    color: theme.palette.color.white,
    backgroundColor: "#383838",
    fontFamily: theme.palette.font.fontFamily,
  },
  focusInputColor: {
    color: theme.palette.color.gray,
    fontFamily: theme.palette.font.fontFamily,
  },
  multilineColor: {
    color: theme.palette.color.orange,
    fontFamily: theme.palette.font.fontFamily,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    position: "relative",
    width: "75%",
    height: 60,
    backgroundColor: theme.palette.color.orange,
    fontFamily: theme.palette.font.fontFamily,
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
  progress: {
    position: "absolute",
  },
  invisibleSeparator: {
    border: "none",
    margin: 4,
  },
  visibleSeparator: {
    width: "100%",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    marginBottom: 20,
  },
  paper: {
    padding: 20,
  },
  forgetEmail: {
    color: theme.palette.color.gray,
  },
  blankSpace: {
    marginBottom: 60,
    width: "100%",
  },
  errorText: {
    margin: "-9px auto 6px auto",
    width: "75%",
    fontSize: 10,
    fontFamily: theme.palette.font.fontFamily,
  },
});

ResetPassword.propTypes = {
  classes: PropTypes.object.isRequired,
  resetPassword: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  resetPassword: passwordResetAction,
};

export default withStyles(styles)(
  connect(null, mapDispatchToProps)(ResetPassword)
);
