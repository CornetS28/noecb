import React, { useState } from "react";
import PropTypes from "prop-types";
import Theme from "../utils/theme";

import { yupResolver } from "@hookform/resolvers/yup";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import {
  passwordResetVerificationAction,
  otpCodeAction,
} from "../redux/actions/auth";
// import { otpVerificationSchema } from "../utils/validators";
import { passwordResetVerificationSchema } from "../utils/validators";

// Images
import AppIcon from "../images/logo.png";
import CheckYourEmailImg from "../images/checkYourEmail.png";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FormHelperText from "@material-ui/core/FormHelperText";
// import CircularProgress from "@material-ui/core/CircularProgress";

const defaultValues = {
  otp_code: "",
  password: "",
  passwordConfirmation: "",
};
const ResetPasswordVerification = (props) => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(passwordResetVerificationSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleResetPasswordVerification = async (data) => {
    try {
      await verifyPasswordReset(data);
      console.log(data);
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
  const { classes, verifyPasswordReset } = props;

  return (
    <Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sm>
        <img src={AppIcon} alt="app-logo" className={classes.image} />
        <img
          src={CheckYourEmailImg}
          alt="check-your-email-img"
          className={classes.image}
        />
        <div className={classes.shortText}>
          <h1>Password Verification</h1>
        </div>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(handleResetPasswordVerification)}
        >
          <TextField
            id="otp_code"
            name="otp_code"
            label="Enter OTP code"
            variant="outlined"
            inputRef={register}
            type={showPassword ? "number" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
              classes: {
                input: classes.multilineColor,
              },
            }}
            fullWidth
            className={classes.textField}
            InputLabelProps={{
              style: {
                color: Theme.palette.color.gray,
                fontFamily: Theme.palette.font.fontFamily,
              },
            }}
            error={!!errors.password}
          />
          <FormHelperText className={classes.errorText} error>
            {!!errors.otp_code && errors.otp_code.message}
          </FormHelperText>

          <TextField
            id="password"
            name="password"
            label="New Password"
            variant="outlined"
            inputRef={register}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
              classes: {
                input: classes.multilineColor,
              },
            }}
            fullWidth
            className={classes.textField}
            InputLabelProps={{
              style: { color: Theme.palette.color.gray },
            }}
            error={!!errors.password}
          />
          <FormHelperText className={classes.errorText} error>
            {!!errors.password && errors.password.message}
          </FormHelperText>

          <TextField
            id="passwordConfirmation"
            name="passwordConfirmation"
            label="New Password Confirmation"
            variant="outlined"
            error={!!errors.passwordConfirmation}
            inputRef={register}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
              classes: {
                input: classes.multilineColor,
              },
            }}
            fullWidth
            className={classes.textField}
            InputLabelProps={{
              style: {
                color: Theme.palette.color.gray,
                fontFamily: Theme.palette.font.fontFamily,
              },
            }}
          />
          <FormHelperText className={classes.errorText} error>
            {!!errors.passwordConfirmation &&
              errors?.passwordConfirmation.message}
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
            Reset Password
          </Button>
          <br />
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
    margin: "40px auto 1px auto",
    width: "75%",
  },
  shortText: {
    color: theme.palette.color.gray,
    fontFamily: theme.palette.font.fontFamily,
    width: "85%",
    margin: "auto",
  },
  textField: {
    margin: "10px auto 10px auto",
    width: "75%",
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.fontFamily,
    backgroundColor: "#383838",
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
  progress: {
    position: "absolute",
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

ResetPasswordVerification.propTypes = {
  classes: PropTypes.object.isRequired,
  verifyPasswordReset: PropTypes.func.isRequired,
  resendOtp: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  verifyPasswordReset: passwordResetVerificationAction,
  resendOtp: otpCodeAction,
};

export default withStyles(styles)(
  connect(null, mapDispatchToProps)(ResetPasswordVerification)
);
