import React from "react";

// React Slick Stuff
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// MUI Stuff
import Grid from "@material-ui/core/Grid";

//Static Images
import BoardMember from "./BoardMember";

import DB from "../../../utils/dbSchema";

const BoardMemberSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Grid item sm={12} xs={12}>
      <Slider {...settings}>
        {DB.users.map((user, index) => (
          <Grid>
            <BoardMember
              key={index}
              thought={user.thought}
              image={user.imageUrl}
              position={user.position}
              fullname={user.fullname}
            />
          </Grid>
        ))}
      </Slider>
    </Grid>
  );
};


export default BoardMemberSlider;
