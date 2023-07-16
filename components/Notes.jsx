"use client";
import React, { useState } from "react";
import TicketCard from "./TicketCard";
import { Box, Card, CardContent, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";

const Notes = ({ name, cardData, setCardData, border }) => {
  const [AddingNew, setAddingNew] = useState(false);
  const handleSubmit = (desc, flag) => {
    // console.log("Handle Submut inside Notes");
    setCardData([
      ...cardData,
      {
        name: "Space Tasks 2",
        desc: desc,
        avatar: "/images/Avatar.png",
        assigned: "Robin",
        menu: 4,
        attach: 6,
        isFlagged: flag,
      },
    ]);
  };
  return (
    <>
      {/* {console.log(`border-${border}-600`)} */}
      <Box className="pt-10">
        <Card
          sx={{ width: "258px", borderColor: border, borderLeftWidth: "4px" }}
          // className={`border-l-4 border-${border}-500`}
        >
          <CardContent className="flex items-center justify-evenly py-4 px-4 uppercase">
            <Typography
              gutterBottom
              fontSize={14}
              fontWeight={900}
              component="span"
            >
              {name}
            </Typography>
            <Box className="border rounded-full flex items-center px-2 bg-[#F7F8FA]">
              {cardData.length}
            </Box>
            <MoreHorizIcon
              style={{ color: "#C3CAD9" }}
              className="cursor-pointer"
            />
            <AddIcon
              style={{ color: "#C3CAD9" }}
              className="cursor-pointer"
              onClick={() => {
                setAddingNew(true);
              }}
            />
          </CardContent>
        </Card>
      </Box>
      {cardData.map((data, index) => {
        return (
          <TicketCard
            key={index}
            data={data}
            index={index}
            length={cardData.length}
            handleSubmit={handleSubmit}
            AddingNew={AddingNew}
            setAddingNew={setAddingNew}
          />
        );
      })}
    </>
  );
};

export default Notes;
