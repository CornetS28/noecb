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

// Redux Stuff

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import CircularProgress from "@material-ui/core/CircularProgress";

// Components

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

const styles = (theme) => ({
  memeGeneratorPageWrapper: {
    backgroundColor: theme.palette.primary.main,
  },
  imgContainer: {
    position: "relative",
  },
  image2: {
    margin: "auto",
    width: "90%",
    margin: "auto",
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    backgroundSize: "contain",
    objectFit: "contain",
  },
  image: {
    position: "relative",
    width: "100%",
    height: "780px",
    backgroundColor: theme.palette.color.preloadColor,
    objectFit: "contain",
    margin: "auto",
    backgroundSize: "contain",

    ["@media (max-width: 1679px)"]: {
      height: "680px",
      objectFit: "contain",
    },
    ["@media (max-width: 1605px)"]: {
      height: "675px",
    },
    ["@media (max-width: 1470px)"]: {
      height: "575px",
    },
    ["@media (max-width: 1453px)"]: {
      height: "580px",
    },
    ["@media (max-width: 1358px)"]: {
      height: "530px",
    },
    ["@media (max-width: 1246px)"]: {
      height: "500px",
    },
    ["@media (max-width: 1190px)"]: {
      height: "490px",
    },
    ["@media (max-width: 1158px)"]: {
      height: "420px",
    },
    ["@media (max-width: 979px)"]: {
      height: "400px",
    },
    ["@media (max-width: 932px)"]: {
      height: "380px",
    },
    ["@media (max-width: 878px)"]: {
      height: "340px",
    },

    ["@media (max-width: 773px)"]: {
      height: "300px",
    },
    ["@media (max-width: 698px)"]: {
      height: "250px",
    },
    ["@media (max-width: 599px)"]: {
      width: "37em",
      height: "250px",
    },
    ["@media (max-width: 575px)"]: {
      width: "35em",
      height: "240px",
    },
    ["@media (max-width: 555px)"]: {
      width: "35em",
      height: "220px",
    },
    ["@media (max-width: 526px)"]: {
      width: "34em",
      height: "200px",
    },
    ["@media (max-width: 508px)"]: {
      width: "32em",
      height: "200px",
    },
    ["@media (max-width: 508px)"]: {
      width: "30em",
      height: "200px",
    },
    ["@media (max-width: 443px)"]: {
      width: "27em",
      height: "200px",
    },

    ["@media (max-width: 375px)"]: {
      width: "24em",
      height: "160px",
    },
  },
  mediaWrapper: {
    backgroundColor: "red",
    marginTop: 40,
  },
  displayHeadline2: {
    color: theme.palette.color.yellow,
    fontFamily: theme.palette.font.HelveticaNeue,
    fontStyle: "normal",
    paddingLeft: 10,
    marginTop: 20,
    marginBottom: 60,
    fontSize: "36px",
    ["@media (max-width: 1270px)"]: {
      fontSize: "33px",
    },
    ["@media (max-width: 1166px)"]: {
      fontSize: "30px",
    },
    ["@media (max-width: 1062px)"]: {
      fontSize: "27px",
    },
    ["@media (max-width: 956px)"]: {
      fontSize: "24px",
    },

    ["@media (max-width: 599px)"]: {
      fontSize: 24,
      margin: "auto",
      textAlign: "center",
    },
  },
  displaySubHeadline: {
    color: theme.palette.color.white,
    paddingLeft: 10,
    marginTop: -10,
    marginBottom: 40,
    fontFamily: theme.palette.font.HelveticaNeue,
    fontStyle: "normal",
    letterSpacing: "-0.64px",
    lineHeight: 1.75,
    fontSize: "16px",
  },
  mediaWrapper: {
    margin: "auto auto 60px auto",
  },
  divider2: {
    backgroundColor: theme.palette.color.white,
    marginTop: 60,
    marginBottom: 60,
  },
  mediumSection: {
    margin: "50px auto 50px auto",
  },
  imageWrapper: {
    margin: "auto",
  },
  leftImage: {
    paddingTop: "28%",
    paddingBottom: "28%",
    paddingLeft: "10%",
    border: `1px solid ${theme.palette.color.contrastWhite}`,
    width: "100%",
    backgroundColor: "white",
    height: "740px",
    position: "relative",

    ["@media (max-width: 1679px)"]: {
      height: "700px",
    },
    ["@media (max-width: 1615px)"]: {
      height: "640px",
    },
    ["@media (max-width: 1605px)"]: {
      height: "600px",
    },
    ["@media (max-width: 1480px)"]: {
      height: "565px",
    },
    ["@media (max-width: 1375px)"]: {
      height: "530px",
    },
    ["@media (max-width: 1260px)"]: {
      height: "500px",
    },
    ["@media (max-width: 1188px)"]: {
      height: "460px",
    },

    ["@media (max-width: 1097px)"]: {
      height: "420px",
      marginTop: 20,
    },

    ["@media (max-width: 980px)"]: {
      height: "400px",
      marginTop: 40,
    },
    ["@media (max-width: 923px)"]: {
      height: "380px",
    },
    ["@media (max-width: 876px)"]: {
      height: "360px",
    },
    ["@media (max-width: 824px)"]: {
      height: "335px",
    },
    ["@media (max-width: 770px)"]: {
      height: "300px",
    },
    ["@media (max-width: 697px)"]: {
      height: "280px",
    },
    ["@media (max-width: 613px)"]: {
      height: "240px",
    },
    ["@media (max-width: 599px)"]: {
      height: "540px",
      marginRight: 15,
      marginLeft: 10,
      marginTop: 10,
    },
    ["@media (max-width: 545px)"]: {
      height: "480px",
    },
    ["@media (max-width: 490px)"]: {
      height: "440px",
    },
    ["@media (max-width: 463px)"]: {
      height: "400px",
    },
    ["@media (max-width: 416px)"]: {
      height: "380px",
    },
    ["@media (max-width: 387px)"]: {
      height: "340px",
      marginTop: 5,
      marginRight: 10,
      marginLeft: 10,
    },
  },
  fileNameLimit: {
    color: "#fff",
    fontSize: 10,
    marginTop: 0,
  },
  phrase1Limit: {
    color: "#fff",
    fontSize: 10,
    marginTop: 0,
  },
  phrase2Limit: {
    color: "#fff",
    fontSize: 10,
    marginTop: 0,
  },
  mediumSectionRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
  mediumSectionRightContent: {
    width: "100%",
  },
  textField: {
    margin: "10px auto 10px auto",
    width: "95%",
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
    backgroundColor: "#383838",
    ["@media (max-width: 1192px)"]: {
      margin: "1px auto 10px auto",
    },
    ["@media (max-width: 967px)"]: {
      height: 35,
      paddingBottom: 12,
    },
  },
  textFieldImage: {
    margin: "10px auto 10px auto",
    width: "88%",
    height: 20,
    display: "inline-block",
    padding: "18px 12px",
    cursor: "pointer",
    color: theme.palette.color.white,
    backgroundColor: "#383838",
    ["@media (max-width: 1551px)"]: {
      margin: "3px auto 10px auto",
      width: "87%",
    },
    ["@media (max-width: 1359px)"]: {
      margin: "3px auto 10px auto",
      width: "85%",
    },
    ["@media (max-width: 1192px)"]: {
      margin: "3px auto 10px auto",
      width: "84%",
    },
    ["@media (max-width: 967px)"]: {
      height: 10,
      width: "82%",
      paddingBottom: 20,
    },
    ["@media (max-width: 599px)"]: {
      width: "90.3%",
    },
    ["@media (max-width: 499px)"]: {
      width: "89%",
    },
    ["@media (max-width: 400px)"]: {
      width: "88%",
    },
    ["@media (max-width: 375px)"]: {
      width: "88%",
    },
  },

  memesWrapper: {
    // backgroundColor: theme.palette.color.darkBlue,
    marginTop: 60,
    ["@media (max-width: 599px)"]: {
      margin: "auto",
    },
  },

  memeImage: {
    position: "relative",
    width: "100%",
    height: "360px",
    backgroundColor: theme.palette.color.main,
    objectFit: "contain",
    margin: "auto",
    backgroundSize: "contain",
    ["@media (max-width: 1679px)"]: {
      height: "320px",
    },
    ["@media (max-width: 1615px)"]: {
      height: "300px",
    },
    ["@media (max-width: 1605px)"]: {
      height: "280px",
    },
    ["@media (max-width: 1480px)"]: {
      height: "265px",
    },
    ["@media (max-width: 1375px)"]: {
      height: "230px",
    },
    ["@media (max-width: 1260px)"]: {
      height: "220px",
    },
    ["@media (max-width: 1188px)"]: {
      height: "200px",
    },

    ["@media (max-width: 1097px)"]: {
      height: "200px",
      marginTop: 20,
    },

    ["@media (max-width: 980px)"]: {
      height: "180px",
      marginTop: 40,
    },
    ["@media (max-width: 923px)"]: {
      height: "160px",
    },
    ["@media (max-width: 876px)"]: {
      height: "140px",
    },
    ["@media (max-width: 824px)"]: {
      height: "135px",
    },
    ["@media (max-width: 770px)"]: {
      height: "130px",
    },
    ["@media (max-width: 697px)"]: {
      height: "110px",
    },
    ["@media (max-width: 613px)"]: {
      height: "100px",
    },
    ["@media (max-width: 599px)"]: {
      height: "520px",
      marginRight: 10,
      marginTop: 10,
    },
    ["@media (max-width: 545px)"]: {
      height: "460px",
    },
    ["@media (max-width: 490px)"]: {
      height: "420px",
    },
    ["@media (max-width: 463px)"]: {
      height: "400px",
    },
    ["@media (max-width: 437px)"]: {
      height: "380px",
    },
    ["@media (max-width: 387px)"]: {
      height: "320px",
      marginTop: 5,
      marginRight: 15,
    },
  },
  multilineColor: {
    color: theme.palette.color.red,
    fontFamily: theme.palette.font.HelveticaNeue,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    position: "relative",
    width: "95%",
    height: 60,
    backgroundColor: theme.palette.color.yellow,
    ["@media (max-width: 1192px)"]: {
      margin: "4px auto 10px auto",
    },
    ["@media (max-width: 967px)"]: {
      height: 40,
    },
    ["@media (max-width: 599px)"]: {
      marginTop: 10,
    },
    "&$disabled": {
      backgroundColor: "white",
    },
  },
  formText: {
    fontFamily: theme.palette.font.HelveticaNeue,
    width: "95%",
    lineHeight: "48px",
    letterSpacing: "-0.5px",
    fontSize: "36px",

    ["@media (max-width: 1699px)"]: {
      fontSize: 31,
    },
    ["@media (max-width: 1531px)"]: {
      fontSize: 30,
    },
    ["@media (max-width: 1489px)"]: {
      fontSize: 28,
    },
    ["@media (max-width: 1491px)"]: {
      fontSize: 28,
    },

    ["@media (max-width: 1356px)"]: {
      fontSize: 26,
    },
    ["@media (max-width: 1297px)"]: {
      fontSize: 24,
    },
    ["@media (max-width: 1177px)"]: {
      fontSize: 22,
      lineHeight: "30px",
    },
    ["@media (max-width: 1192px)"]: {
      fontSize: 20,
      lineHeight: "30px",
    },
    ["@media (max-width: 967px)"]: {
      fontSize: 19,

      lineHeight: "25px",
    },
    ["@media (max-width: 899px)"]: {
      fontSize: 15,
    },
    ["@media (max-width: 599px)"]: {
      fontSize: 30,
      lineHeight: "35px",
      marginBottom: 60,
    },
  },
  formWrapper: {
    paddingLeft: "5%",
  },
  whiteColorTexT: {
    color: theme.palette.color.white,
    fontFamily: theme.palette.font.HelveticaNeue,
  },
  greenColorTexT: {
    color: theme.palette.color.sucess,
    fontFamily: theme.palette.font.HelveticaNeue,
  },
  orangeColorTexT: {
    color: theme.palette.color.red,
    fontFamily: theme.palette.font.HelveticaNeue,
  },
  darkBlueColorTexT: {
    color: theme.palette.color.darkBlue,
    fontFamily: theme.palette.font.HelveticaNeue,
  },
  blackColorTexT: {
    color: theme.palette.color.black,
    fontFamily: theme.palette.font.HelveticaNeue,
  },
  yellowColorTexT: {
    color: theme.palette.color.yellow,
    fontFamily: theme.palette.font.HelveticaNeue,
  },
  resize: {
    color: Theme.palette.color.white,
    ["@media (max-width: 939px)"]: {
      fontSize: 10,
      color: "red",
    },
  },
  displaySubHeadlineInGrid: {
    color: theme.palette.color.white,
    paddingLeft: 10,
    marginTop: -100,
    marginBottom: 10,
    fontFamily: theme.palette.font.HelveticaNeue,
    fontStyle: "normal",
    letterSpacing: "-0.64px",
    lineHeight: 1.75,
    fontSize: "20px",
    width: 500,
    ["@media (max-width: 599px)"]: {
      margin: "auto",
      marginTop: -60,
      textAlign: "center",
    },
  },
});

MemeGenerator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemeGenerator);
