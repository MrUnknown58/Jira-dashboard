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
      avatar: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png",
      isFlagged: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1462396240927-52058a6a84ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Space Tasks 2",
      desc: "Global Resorts Netwo",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      avatar: "https://cdn-icons-png.flaticon.com/128/4128/4128176.png",
      isFlagged: false,
    },
    {
      name: "Space Tasks 2",
      desc: "Development Apps",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      avatar: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
      isFlagged: true,
    },
    {
      name: "Space Tasks 2",
      desc: "Copper Canyon",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      avatar: "https://cdn-icons-png.flaticon.com/128/706/706830.png",
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
