"use client";
import React, { useState } from "react";
import Notes from "./Notes";
import { Box } from "@mui/material";

const InWork = () => {
  const sampleData = [
    {
      name: "Space Tasks 2",
      desc: "Types Of Paper In Ca",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      avatar: "/images/AvatarImg7.png",
      isFlagged: false,
    },
    {
      image: "/images/InWorkcardImage.png",
      name: "Space Tasks 2",
      desc: "Global Resorts Netwo",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      avatar: "/images/AvatarImg1.png",
      isFlagged: false,
    },
    {
      name: "Space Tasks 2",
      desc: "Development Apps",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      avatar: "/images/AvatarImg8.png",
      isFlagged: true,
    },
    {
      name: "Space Tasks 2",
      desc: "Copper Canyon",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      avatar: "/images/AvatarImg3.png",
      isFlagged: false,
    },
  ];
  const [todos, settodos] = useState(sampleData);
  return (
    <Box className="flex flex-col">
      <Notes
        name={"In Work"}
        cardData={todos}
        setCardData={settodos}
        border="rgb(20 184 166)"
      />
    </Box>
  );
};

export default InWork;
