import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppIcon from "../images/logo.png";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Theme from "../utils/theme";
import { signinSchema } from "../utils/validators";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FormHelperText from "@material-ui/core/FormHelperText";

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  organization: "",
  zipcode: "",
};

const SignIn = (props) => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(signinSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [checkedIds, setCheckedIds] = useState([]);

  function handleCheck(event) {
    const checkedId = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setCheckedIds([...checkedIds, checkedId]);
    } else {
      setCheckedIds(checkedIds.filter((id) => id !== checkedId));
    }
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleSignin = async (data) => {
    console.log("Signin data:", data);
    try {
      // reset(defaultValues);
    } catch (e) {
      console.log(e);
    }
  };

  const { classes } = props;

  return (
    <Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sx={12} sm={6} md={5} lg={4} style={{ margin: "auto" }}>
        <img src={AppIcon} alt="portrat" className={classes.image} />
        <Grid xs={11} sm={12} className={classes.formContainer}>
          <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(handleSignin)}
            style={{ paddingTop: 20, paddingBottom: 20 }}
          >
            <TextField
              id="email"
              name="usernameOrEmail"
              type="email"
              label="Email"
              error={!!errors.usernameOrEmail}
              className={classes.textField}
              fullWidth
              multiline
              variant="outlined"
              inputRef={register}
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
            <FormHelperText error className={classes.errorText}>
              {!!errors.usernameOrEmail && errors.usernameOrEmail.message}
            </FormHelperText>
            <TextField
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              error={!!errors.password}
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
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              fullWidth
              className={classes.textField}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
            />
            <FormHelperText className={classes.errorText} error>
              {!!errors.password && errors.password.message}
            </FormHelperText>

            <div className={classes.textForm}>
              <FormControlLabel
                label="Remember me"
                control={
                  <Checkbox
                    style={{
                      color: Theme.palette.color.yellow,
                    }}
                    value=""
                    onChange={handleCheck}
                  />
                }
              />
            </div>

            <br />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Login
            </Button>
            <br />
            <small className={classes.haveAnAccount}>
              Don't have an account?{" "}
              <Link to="/become-a-member">
                <span className={classes.login}>Sign-up {">"} </span>
              </Link>
            </small>
            <br />
            <small className={classes.forgetEmail}>
              Forget your password ?{" "}
              <Link to="/reset-password">
                <span className={classes.login}>click here {">"} </span>
              </Link>
            </small>
          </form>
          <div className={classes.blankSpace}></div>
        </Grid>
      </Grid>

      <Grid item sm />
    </Grid>
  );
};

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

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
