"use client";
import React, { useState } from "react";
import Notes from "./Notes";
import { Box } from "@mui/material";

const Done = () => {
  const sampleData = [
    {
      name: "Space Tasks 2",
      desc: "Copper Canyon",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      avatar: "https://cdn-icons-png.flaticon.com/128/706/706830.png",
      assigned: "Sanu",
    },
  ];
  const [todos, settodos] = useState(sampleData);
  return (
    <Box className="flex flex-col">
      <Notes
        name={"Done"}
        cardData={todos}
        setCardData={settodos}
        border="rgb(34 197 94)"
      />
    </Box>
  );
};

export default Done;
