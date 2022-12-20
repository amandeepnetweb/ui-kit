import React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const StarRating = ({ starCount, onChange }) => {
  return (
    <React.Fragment>
      <Typography component="legend">Controlled</Typography>
      <Rating
        value={starCount}
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
      />
    </React.Fragment>
  );
};

export default StarRating;
