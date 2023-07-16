import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AttachmentIcon from "@mui/icons-material/Attachment";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Person3Icon from "@mui/icons-material/Person3";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import FlagIcon from "@mui/icons-material/Flag";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const TicketCard = ({
  data,
  index,
  length,
  handleSubmit,
  AddingNew,
  setAddingNew,
}) => {
  const [isNewFlagged, setisNewFlagged] = useState(false);
  const [newcard, setnewcard] = useState("");
  return (
    <>
      <Box className="pt-3">
        {/* <TicketCard data={data} /> */}
        {/* <Typography>Hello</Typography> */}
        <Card
          sx={{ width: "258px" }}
          className={`${
            data?.isFlagged === true ? "border-[1px] border-red-500" : ""
          }`}
        >
          {data?.image && (
            <CardMedia
              sx={{ height: 140 }}
              image={data?.image}
              title="green iguana"
            />
          )}
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <Typography
                gutterBottom
                fontSize={10}
                fontWeight={700}
                fontFamily={"Roboto"}
                color="#ADB8CC"
                component="div"
              >
                {data?.name}
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={700}
                fontFamily={"Roboto"}
                color="#6B7A99"
              >
                {data?.desc}
              </Typography>
            </Box>
            <Tooltip title={data?.assigned}>
              <Box>
                <Image
                  src={data?.avatar}
                  width={30}
                  height={30}
                  alt=""
                  className="rounded-full"
                />
              </Box>
            </Tooltip>
          </CardContent>
          <CardActions>
            {(data?.image || data?.isFlagged) && (
              <Box className="flex justify-between w-full">
                <Box className="flex space-x-2 items-center">
                  <MenuIcon
                    sx={{ width: "30px", height: "30px", color: "#C3CAD9" }}
                  />{" "}
                  <Typography
                    fontSize={10}
                    fontFamily={"Roboto"}
                    fontWeight={700}
                  >
                    {data?.menu}
                  </Typography>
                </Box>
                <Box className="flex space-x-2 items-center">
                  <AttachmentIcon
                    sx={{ width: "30px", height: "30px", color: "#C3CAD9" }}
                  />{" "}
                  <Typography
                    fontSize={10}
                    fontFamily={"Roboto"}
                    fontWeight={700}
                  >
                    {data?.attach}
                  </Typography>
                </Box>
                <Box
                  className={`${
                    data?.isFlagged ? "text-red-600 font-bold" : ""
                  } flex items-center space-x-2`}
                >
                  <AccessAlarmIcon
                    style={{
                      width: "30px",
                      height: "30px",
                      color: data?.isFlagged ? "red" : "#C3CAD9",
                    }}
                  />{" "}
                  <Typography
                    fontSize={10}
                    fontFamily={"Roboto"}
                    fontWeight={700}
                  >
                    {data?.isFlagged ? "1 Days Left" : data?.alarm}
                  </Typography>
                </Box>
              </Box>
            )}
          </CardActions>
        </Card>
      </Box>
      {AddingNew && index === length - 1 && (
        <>
          <Box className="pt-4">
            {/* <TicketCard data={data} /> */}
            {/* <Typography>Hello</Typography> */}
            <Card sx={{ width: "258px" }} className="">
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box className="flex flex-col space-y-4">
                  <Box className="flex items-center space-x-2">
                    <Box
                      onClick={() => {
                        setAddingNew(false);
                      }}
                      className="cursor-pointer"
                    >
                      <CloseOutlinedIcon />
                    </Box>
                    <TextField
                      id="outlined-required"
                      label="Type here.."
                      onChange={(e) => {
                        setnewcard(e.target.value);
                      }}
                    />
                  </Box>
                  <Box className="flex justify-between">
                    <Box className="space-x-2">
                      <FlagIcon
                        style={{
                          color: isNewFlagged ? "red" : "#C3CAD9",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setisNewFlagged(!isNewFlagged);
                        }}
                      />
                      <AttachmentIcon style={{ color: "#C3CAD9" }} />
                      <TimerOutlinedIcon style={{ color: "#C3CAD9" }} />
                    </Box>
                    <Button
                      className="bg-blue-500"
                      variant="contained"
                      onClick={() => {
                        setAddingNew(false);
                        handleSubmit(newcard, isNewFlagged);
                      }}
                    >
                      Save
                    </Button>
                  </Box>
                  {/* <AddIcon
                    style={{ color: "#C3CAD9" }}
                    className="cursor-pointer"
                  />
                  <Typography gutterBottom variant="h7" component="div">
                    ADD NEW TASK
                  </Typography> */}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </>
      )}
      {index === length - 1 && (
        <>
          <Box
            className="pt-4 flex items-center space-x-1 cursor-pointer text-[#6B7A99]"
            onClick={() => {
              setAddingNew(true);
            }}
          >
            <AddIcon />
            <Typography fontWeight={700} fontSize={12} color="#6B7A99">
              NEW TASK
            </Typography>
          </Box>
        </>
      )}
    </>
  );
};

export default TicketCard;
