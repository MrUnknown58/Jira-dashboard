"use client";
import React, { useState } from "react";
import Notes from "./Notes";
import { Box } from "@mui/material";

const InReview = () => {
  const sampleData = [
    {
      name: "Space Tasks 2",
      desc: "Astronomy Or Astrology",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      avatar: "/images/AvatarImg9.png",
    },
    {
      name: "Space Tasks 2",
      desc: "Astronomy Binoculars A Great",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      avatar: "/images/AvatarImg8.png",
    },
  ];
  const [todos, settodos] = useState(sampleData);
  return (
    <Box className="flex flex-col">
      <Notes
        name={"Review"}
        cardData={todos}
        setCardData={settodos}
        border="rgb(253 224 71)"
      />
    </Box>
  );
};

export default InReview;
