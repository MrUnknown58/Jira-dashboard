"use client";
import { useState } from "react";
import TicketCard from "./TicketCard";
import { Box } from "@mui/material";
import Notes from "./Notes";
const ToDo = () => {
  const sampleData = [
    {
      image:
        "https://images.unsplash.com/photo-1601690586707-d5ea34a79687?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlZCUyMGxlYWZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: "Space Tasks 2",
      desc: "Make Money Online through",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      avatar: "https://cdn-icons-png.flaticon.com/128/706/706830.png",
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
      avatar: "https://cdn-icons-png.flaticon.com/128/4128/4128176.png",
    },
    {
      name: "Space Tasks 2",
      desc: "Search Engine Optimization",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      isFlagged: false,
      avatar: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
    },
    {
      name: "Space Tasks 2",
      desc: "Characteristics Of A Successful",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      isFlagged: false,
      avatar: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png",
    },
    {
      name: "Space Tasks 2",
      desc: "Getting Free Publicity",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      isFlagged: false,
      avatar: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png",
    },
    {
      name: "Space Tasks 2",
      desc: "Importance Of The Custom ...",
      menu: 4,
      attach: 6,
      alarm: "6 Days Left",
      assigned: "Sanu",
      isFlagged: false,
      avatar: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png",
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
