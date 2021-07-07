import React from "react";
import PropTypes from "prop-types";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// Components
import ContactUs from "../../components/ContactUs/ContactUs";
import CommunityHistory from "../../components/AboutComponents/Community";
import CommunityFullDetails from "../../components/AboutComponents/CommunityFullDetails";
import Winners from "../../components/AboutComponents/Winners";
import EditWinner from "../../components/AboutComponents/EditWinner";

// Images
import LandingImage from "../../images/mainHomeImage.png";
import CommunityImg from "../../images/footballfemme.jpg";

// Utils stuff
import styles from "./Styles";
import ToolpicButton from "../../utils/ToolpicButton";
import DB from "../../utils/dbSchema";

const About = ({ classes }) => {
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState("");
  const [openEditWinner, setOpenEditWinner] = React.useState(false);

  const theme = useTheme();

  const handleClickOpen = () => {
    setOpenEditWinner(true);
  };

  const handleClickClose = () => {
    setOpenEditWinner(false);
  };

  const handleOpen = (id) => {
    const communityItem = DB.communityFocuses.find((item) => item.comId === id);
    setOpen(true);
    setItem(communityItem);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container className={classes.aboutPageWrapper}>
      <Grid container>
        <Grid item sm />
        <Grid item sm={12} xs={12}>
          <img
            src={LandingImage}
            alt="portrait"
            className={classes.mainImage}
          />
        </Grid>

        <Grid
          container
          item
          sm={12}
          xs={12}
          className={classes.textOnImageWrapper}
        >
          <Grid container item sm={6} xs={12}>
            <Grid
              item
              sm={9}
              xs={12}
              style={{
                paddingRight: 30,
                position: "relative",
              }}
            >
              <h1 className={classes.displayHeadlineOnImage}>
                Church Of Bible understanding bsdfdv saf kdfvdkf fdvd v
                fkvfdkvdvfdkv
              </h1>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm />
      </Grid>

      {/* --- Community stuff --- */}
      <Grid
        container
        spacing={4}
        item
        sm={8}
        xs={11}
        className={classes.subSection}
      >
        {DB.communityFocuses.map((community, index) => (
          <Grid
            item
            sm={4}
            xs={12}
            className={classes.cardWrapper}
            key={index}
            onClick={() => handleOpen(community.comId)}
          >
            <CommunityHistory
              image={community.image}
              title={community.title}
              briefDescription={community.briefDescription}
              totalDescription={community.totalDescription}
            />
          </Grid>
        ))}
        <Grid item sm={12} xs={12}>
          <Divider className={classes.divider2} />
        </Grid>
        {/* --- Modal --- */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open} className={classes.modalWrapper}>
            <Grid item xs={10} sm={8}>
              <Grid item sx={12} sm={12}>
                <CommunityFullDetails item={item} />
              </Grid>
            </Grid>
          </Fade>
        </Modal>
      </Grid>

      {/*--- Contact us form section----*/}
      <ContactUs />

      {/*--- Winners us form section----*/}
      <Grid
        container
        spacing={4}
        item
        sm={8}
        xs={11}
        className={classes.subSection}
      >
        <Typography variant="h3" component="h2" className={classes.header3}>
          Our Winners
        </Typography>

        {DB.winners.slice(0, 4).map((winner, idx) => {
          return (
            <Winners
              key={idx}
              winnerImage={winner.image}
              header={winner.title}
              speech={winner.description}
              readMore="See More"
              editWinner={handleClickOpen}
            />
          );
        })}

        <Dialog
          open={openEditWinner}
          onClose={handleClickClose}
          fullWidth
          maxWidth="sm"
        >
          <ToolpicButton
            tip="Close"
            onClick={handleClickClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </ToolpicButton>
          <DialogTitle className={classes.dialogueEditHeader}>
            Edit Winner
          </DialogTitle>
          <DialogContent>
            <EditWinner
              titleWon="Hardest Worker"
              winnerName="Samson Hill"
              encouragementWords="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit."
            />
          </DialogContent>
        </Dialog>
      </Grid>
    </Grid>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
