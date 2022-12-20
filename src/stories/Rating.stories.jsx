import React, { useState } from "react";

import StarRating from "../components/StarRating";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/StarRating",
  component: StarRating,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Rating = (args) => {
  const [rating, setRating] = useState("");

  return <StarRating startCount={rating} onChange={setRating} />;
};
