const styles = (theme) => ({
  memeGeneratorPageWrapper: {
    backgroundColor: theme.palette.primary.main,
  },
  imgContainer: {
    width: "100%",
    position: "relative",
  },
  mainImage: {
    margin: "auto",
    width: "100%",
    position: "aboslute",
    objectFit: "contain",
    backgroundSize: "contain",
    filter: "brightness(0.5)",
  },
});

export default styles;
