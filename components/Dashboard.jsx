"use client";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Box, Divider, InputBase, Paper } from "@mui/material";
import Options from "./Options";
import { useState } from "react";
import ToDo from "./ToDo";
import InWork from "./InWork";
import InReview from "./InReview";
import Done from "./Done";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SideBar from "./SideBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SortIcon from "@mui/icons-material/Sort";
import DehazeIcon from "@mui/icons-material/Dehaze";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

const Dashboard = () => {
  const sampleNav = [
    {
      index: 1,
      name: "Boards",
      isSelected: true,
      icon: <DashboardIcon style={{ height: "30px", width: "30px" }} />,
    },
    {
      index: 2,
      name: "Calender",
      isSelected: false,
      icon: <DateRangeIcon style={{ height: "30px", width: "30px" }} />,
    },
    {
      index: 3,
      name: "List tasks",
      isSelected: false,
      icon: <PlaylistAddCheckIcon style={{ height: "30px", width: "30px" }} />,
    },
    {
      index: 4,
      name: "Gannt",
      isSelected: false,
      icon: <SortIcon style={{ height: "30px", width: "30px" }} />,
    },
    {
      index: 5,
      name: "Timeline",
      isSelected: false,
      icon: <DehazeIcon style={{ height: "30px", width: "30px" }} />,
    },
    {
      index: 6,
      name: "Activity",
      isSelected: false,
      icon: <TrendingUpIcon style={{ height: "30px", width: "30px" }} />,
    },
  ];
  const [nav, setnav] = useState(sampleNav);
  const handleLeft = () => {
    let newNav = [];
    let selected = -1;
    nav.map((navItem, index) => {
      if (navItem.isSelected) {
        let last = newNav.pop();
        newNav.push({ ...last, isSelected: true });
        newNav.push({ ...navItem, isSelected: false });
        selected = navItem.index - 1;
        console.log(selected);
      } else {
        newNav.push(navItem);
      }
    });
    if (selected !== 0) setnav(newNav);
  };
  const handleRight = () => {
    let newNav = [];
    let selected = -1;
    nav.map((navItem, index) => {
      if (navItem.isSelected) {
        newNav.push({ ...navItem, isSelected: false });
        selected = navItem.index + 1;
        console.log(selected);
      } else if (navItem.index === selected) {
        newNav.push({ ...navItem, isSelected: true });
      } else {
        newNav.push(navItem);
      }
    });
    if (selected !== 6) setnav(newNav);
  };
  return (
    <>
      <Box className="flex justify-between">
        <SideBar />
        <Box className="overflow-x-auto">
          <Box className="flex justify-between">
            <div className="border rounded-full flex items-center px-2 md:hidden bg-[#fff]">
              <KeyboardArrowLeftRoundedIcon
                onClick={() => {
                  handleLeft();
                }}
              />
            </div>
            <Box className="w-44 flex items-center">
              <Options nav={nav} setnav={setnav} />
            </Box>
            <Box className="border rounded-full flex items-center px-2 md:hidden">
              <ChevronRightRoundedIcon
                onClick={() => {
                  handleRight();
                }}
              />
            </Box>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                // display: "flex",
                // alignItems: "center",
                // width: 300,
                // marginTop: "-2%",
              }}
              className="rounded-xl h-9 hidden md:flex"
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Here..."
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
          </Box>

          {/* <Box className="border rounded-full flex items-center px-2 md:hidden bg-[#fff] p-2">
          <SearchIcon />
        </Box> */}

          <Box className="flex overflow-x-auto">
            {/* <SideBar /> */}
            <Box className="flex space-x-8 bg-[#F7F8FA]">
              <ToDo />
              <InWork />
              <InReview />
              <Done />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
