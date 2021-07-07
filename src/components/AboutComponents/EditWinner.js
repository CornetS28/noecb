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
import { contactUsSchema } from "../../utils/validators";



const EditWinner = (props) => {
  const { register, errors, handleSubmit, reset } = useForm({
    // resolver: yupResolver(contactUsSchema),
  });
  const handleEditWinner = async (data) => {
    console.log("form data:", data);
    // try {
    //   reset(defaultValues);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  const { classes, winnerName, titleWon, encouragementWords } = props;
  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(handleEditWinner)}
    >
      <TextField
        name='titleWon'
        type="text"
        label="Title won"
        defaultValue={titleWon}
        inputRef={register}
        // error={!!errors.subject}
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
      <TextField
        name="winnerName"
        type="text"
        label="Fullname"
        defaultValue={winnerName}
        inputRef={register}
        // error={!!errors.subject}
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
      {/* <FormHelperText className={classes.errorText} error>
        {!!errors.subject && errors.subject.message}
      </FormHelperText> */}

      <TextField
        name="encouragementWords"
        type="text"
        label="Word of encouragement"
        defaultValue={encouragementWords}
        multiline
        rows={6}
        variant="outlined"
        inputRef={register}
        // error={!!errors.message}
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
      {/* <FormHelperText className={classes.errorText} error>
        {!!errors.message && errors.message.message}
      </FormHelperText> */}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.contactUsButton}
        disabled={""}
      >
        Submit
        {/* {isLoading ? "Submiting..." : "Submit"} */}
      </Button>
    </form>
  );
};

const styles = (theme) => ({
  cssLabel: {
    color: theme.palette.color.darkBlue,
  },

  cssOutlinedInput: {
    color: theme.palette.color.darkBlue,
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.color.darkBlue} !important`,
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
    color: theme.palette.color.darkBlue,
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

EditWinner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditWinner);
