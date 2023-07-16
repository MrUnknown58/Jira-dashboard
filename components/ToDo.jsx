"use client";
import { useState } from "react";
import TicketCard from "./TicketCard";
import { Box } from "@mui/material";
import Notes from "./Notes";
const ToDo = () => {
  const sampleData = [
    {
      image: "/images/todoCardImage.png",
      name: "Space Tasks 2",
      desc: "Make Money Online through",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      avatar: "/images/AvatarImg1.png",
      isFlagged: false,
    },
    {
      name: "Space Tasks 2",
      desc: "Make Money Online through",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      isFlagged: false,
      avatar: "/images/AvatarImg2.png",
    },
    {
      name: "Space Tasks 2",
      desc: "Search Engine Optimization",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      isFlagged: false,
      avatar: "/images/AvatarImg3.png",
    },
    {
      name: "Space Tasks 2",
      desc: "Characteristics Of A Successful",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      isFlagged: false,
      avatar: "/images/AvatarImg4.png",
    },
    {
      name: "Space Tasks 2",
      desc: "Getting Free Publicity",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      isFlagged: false,
      avatar: "/images/AvatarImg5.png",
    },
    {
      name: "Space Tasks 2",
      desc: "Importance Of The Custom ...",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      isFlagged: false,
      avatar: "/images/AvatarImg6.png",
    },
  ];
  const [todos, settodos] = useState(sampleData);
  return (
    <Box className="flex flex-col">
      <Notes
        name={"TO DO"}
        cardData={todos}
        setCardData={settodos}
        border="indigo"
      />
    </Box>
  );
};

export default ToDo;
