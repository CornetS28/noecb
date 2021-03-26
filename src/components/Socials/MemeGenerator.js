import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import env from "ckey";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

// Static Images
import Logo from "../../images/logo.png";

// Utils Stuff
import Theme from "../../utils/theme";
import { memeGeneratorSchema } from "../../utils/validators";
import DB from "../../utils/dbSchema";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import CircularProgress from "@material-ui/core/CircularProgress";

// Redux Stuff

// Components

// Styles
import styles from "./Styles";

const MemeGenerator = (props) => {
  const { control, register, errors, handleSubmit } = useForm({
    resolver: yupResolver(memeGeneratorSchema),
    mode: "onTouched",
    defaultValues: {
      phrase_1: "",
      phrase_2: "",
      file_name: { 0: [], size: 0 },
    },
  });

  const [phrase1Limit, setPhrase1Limit] = useState(0);
  const [phrase2Limit, setPhrase2Limit] = useState(0);

  const displaylastRecentFourMemes = async () => {
    // try {
    //   await props.getMemes();
    // } catch (e) {
    //   console.log(e);
    // }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file_name", data.file_name[0]);
    formData.append("phrase_1", data.phrase_1);
    formData.append("phrase_2", data.phrase_2);
    console.log("DATA:", data.phrase_1);
    // try {
    //   await props.createMeme(formData);
    // } catch (e) {
    //   console.error("ERROR: " + e);
    // }
  };

  const { classes } = props;
  return (
    <Grid
      container
      sm={10}
      xs={12}
      spacing={6}
      className={classes.mediumSection}
    >
      <Grid container item sm={6} xs={12} className={classes.mediumSectionLeft}>
        <Grid item sm={12} xs={12} className={classes.leftImage}>
          <div className={classes.imageWrapper}>
            <img src={Logo} imageStyle={classes.image2} />
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        item
        sm={6}
        xs={12}
        className={classes.mediumSectionRight}
      >
        <Grid item sm={2} xs={12} />
        <Grid
          container
          item
          sm={8}
          xs={12}
          className={classes.mediumSectionRightContent}
        >
          <Grid item sm={1} xs={12} />
          <Grid item sm={9} xs={12} className={classes.formWrapper}>
            <h1 className={classes.formText}>
              {" "}
              <span className={classes.whiteColorTexT}>
                Tell us your thoughts on{" "}
              </span>{" "}
              <span className={classes.greenColorTexT}> “</span>
              <span className={classes.orangeColorTexT}>Church</span>
              <span className={classes.darkBlueColorTexT}> of </span>
              <span className={classes.blackColorTexT}> Bible </span>
              <span className={classes.yellowColorTexT}>Understanding</span>
              <span className={classes.greenColorTexT}>” </span>
              <span className={classes.whiteColorTexT}> in 3 easy steps!</span>
            </h1>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                id="phrase_1"
                name="phrase_1"
                type="text"
                label="I am"
                onChange={(e) => setPhrase1Limit(e.target.value.length)}
                className={classes.textField}
                inputRef={register}
                autoComplete="off"
                error={!!errors.phrase_1}
                fullWidth
                multiline
                variant="outlined"
                InputLabelProps={{
                  style: {
                    color: Theme.palette.color.white,
                    fontFamily: Theme.palette.font.HelveticaNeue,
                  },
                }}
                InputProps={{
                  classes: {
                    input: classes.multilineColor,
                  },
                }}
                inputProps={{
                  maxLength: 17,
                }}
              />
              <FormHelperText className={classes.phrase1Limit}>
                {phrase1Limit}/17 characters
              </FormHelperText>
              <FormHelperText className={classes.errorText} error>
                {!!errors.phrase_1 && errors.phrase_1.message}
              </FormHelperText>
              <TextField
                id="phrase_2"
                name="phrase_2"
                type="text"
                label="Church of Bible Undersatanding"
                className={classes.textField}
                inputRef={register}
                onChange={(e) => setPhrase2Limit(e.target.value.length)}
                error={!!errors.phrase_2}
                fullWidth
                multiline
                variant="outlined"
                InputLabelProps={{
                  style: {
                    color: Theme.palette.color.white,
                    ["@media (max-width: 939px)"]: {
                      fontSize: 10,
                      color: "red",
                    },
                  },
                }}
                InputProps={{
                  classes: {
                    input: classes.multilineColor,
                  },
                }}
                inputProps={{
                  maxLength: 21,
                }}
              />
              <FormHelperText className={classes.phrase2Limit}>
                {phrase2Limit}/21 characters
              </FormHelperText>

              <FormHelperText className={classes.errorText} error>
                {!!errors.phrase_2 && errors.phrase_2.message}
              </FormHelperText>
              <Controller
                control={control}
                name="file_name"
                render={({ onChange, name }) => (
                  <input
                    id="file_name"
                    name={name}
                    type="file"
                    onChange={(event) => onChange(event.target.files)}
                    label="Upload photo"
                    className={classes.textFieldImage}
                    fullWidth
                    multiline
                    variant="outlined"
                  />
                )}
              />
              <FormHelperText className={classes.fileNameLimit}>
                Please, make sure it's a square for maximum quality
              </FormHelperText>

              {errors.file_name && (
                <FormHelperText className={classes.errorText} error>
                  {errors.file_name.message}
                </FormHelperText>
              )}
              <br />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Create
                {/* Creat{loadingMemeGenerator ? "ing..." : "e"}
                  {loadingMemeGenerator && (
                    <CircularProgress color="white" size={25} />
                  )} */}
              </Button>
            </form>
          </Grid>

          <Grid item sm={1} xs={12} />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        sm={12}
        xs={12}
        className={classes.memesWrapper}
      >
        {DB.memes?.map((meme, idx) => (
          <Grid item sm={3} xs={12} spacing={1} idx={idx} key={idx}>
            {meme.file_name}

            <img
              src={meme.memeImage}
              imageStyle={classes.memeImage}
              alt="meme"
            />
          </Grid>
        ))}
      </Grid>

      <Grid sm={12} xs={12}>
        <Divider className={classes.divider2} />
      </Grid>
      <Grid container sm={12} xs={12} className={classes.mediaWrapper}>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <h1 className={classes.displayHeadline2}>comming soon:</h1>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};


MemeGenerator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemeGenerator);
