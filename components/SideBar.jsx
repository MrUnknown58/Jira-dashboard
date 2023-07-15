"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExploreIcon from "@mui/icons-material/Explore";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import MessageIcon from "@mui/icons-material/Message";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PublicIcon from "@mui/icons-material/Public";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import CloudIcon from "@mui/icons-material/Cloud";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import EventIcon from "@mui/icons-material/Event";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PersonIcon from "@mui/icons-material/Person";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, InputBase, Paper, Stack } from "@mui/material";
import Image from "next/image";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const menu = [
    { name: "Explore", icon: <ExploreIcon /> },
    { name: "Starred", icon: <StarOutlineIcon /> },
    { name: "Message", icon: <MessageIcon /> },
    { name: "Trending", icon: <TrendingUpIcon /> },
    { name: "News", icon: <PublicIcon /> },
    { name: "Location", icon: <LocationCityIcon /> },
  ];
  const usermenu = [
    {
      text: "Dashboard",
      icon: <DashboardIcon style={{ color: "#C3CAD9" }} />,
    },
    {
      text: "Notes",
      icon: <ChecklistRtlIcon style={{ color: "#3361FF" }} />,
    },
    {
      text: "Tasks",
      icon: <ChecklistRtlIcon style={{ color: "#C3CAD9" }} />,
    },
    {
      text: "Files",
      icon: <CloudIcon style={{ color: "#C3CAD9" }} />,
    },
    {
      text: "Emails",
      icon: <MailOutlineIcon style={{ color: "#C3CAD9" }} />,
    },
    {
      text: "Clients",
      icon: <SupervisorAccountIcon style={{ color: "#C3CAD9" }} />,
    },
    {
      text: "Calender",
      icon: <EventIcon style={{ color: "#C3CAD9" }} />,
    },
    {
      text: "Settings",
      icon: <SettingsIcon style={{ color: "#C3CAD9" }} />,
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        className="border-b-2"
        elevation={0}
        sx={{ background: "#F7F8FA" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              color: "#C3CAD9",
              backgroundColor: "#fff",
              padding: "12px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box className="bg-[#F7F8FA] space-x-5 text-[#7D8FB3] h-[75px] flex justify-between w-full items-center">
            <Box>Constructor</Box>
            <Box
              className={`md:${
                open ? "hidden" : "flex"
              } space-x-10 hidden items-center`}
            >
              <Typography className="cursor-pointer">Dashboard</Typography>
              <Typography className="cursor-pointer">About Us</Typography>
              <Typography className="cursor-pointer">News</Typography>
              <Typography className="cursor-pointer">User Policy</Typography>
              <Typography className="cursor-pointer">Contact</Typography>
              <Typography className="cursor-pointer">
                <MoreHorizIcon />
              </Typography>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 300,
                  marginTop: "-1%",
                }}
                className="rounded-[13px] ml-12"
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Here..."
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              </Paper>
            </Box>
            <Box className="md:hidden flex">
              <AccountCircleIcon sx={{ color: "#C3CAD9" }} />
            </Box>
            <Box className="md:flex space-x-4 items-center hidden">
              <AccountCircleIcon sx={{ color: "#C3CAD9", cursor: "pointer" }} />
              <Typography className="cursor-pointer">Clayton Santos</Typography>
              <Box className="border rounded-full flex items-center p-[10px] bg-[#fff]">
                <NotificationsIcon
                  sx={{ color: "#C3CAD9", cursor: "pointer" }}
                />
              </Box>
              <Box className="border rounded-full flex items-center p-[10px] bg-[#fff]">
                <CloseIcon sx={{ color: "#C3CAD9", cursor: "pointer" }} />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{ background: "#F7F8FA" }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menu?.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item?.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item?.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List className="flex justify-end flex-col h-full">
          {[
            {
              name: "Rajeev",
              icon: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png",
            },
            {
              name: "Neha",
              icon: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
            },
            {
              name: "Satyam",
              icon: "https://cdn-icons-png.flaticon.com/128/4128/4128176.png",
            },
            {
              name: "Meenal",
              icon: "https://cdn-icons-png.flaticon.com/128/706/706830.png",
            },
          ].map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Image src={item?.icon} width={30} height={30} alt="" />
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary={item?.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box className="hidden md:block w-[16rem] bg-[#F7F8FA]">
        <Box className="pt-4 flex justify-between">
          <Box className="border rounded-full flex items-center p-2 bg-[#fff] cursor-pointer">
            <PersonIcon />
          </Box>
          <Box className="border rounded-full flex items-center p-2 bg-[#fff] cursor-pointer">
            <MoreHorizIcon />
          </Box>
        </Box>
        <Box className="flex flex-col justify-center">
          <Box className="flex justify-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
              width={130}
              height={130}
              alt=""
            />
          </Box>
          <Typography className="text-center">Hello Alfred Bryant</Typography>
          <Typography className="text-center">
            adrain.nader@yahoo.com
          </Typography>
          <Stack
            direction={"row"}
            flexWrap="wrap"
            justifyContent="start"
            alignItems="start"
            gap={2}
          >
            {usermenu?.map((item, index) => {
              return (
                <Box
                  className={`border w-[110px] h-[120px] flex flex-col justify-center ${
                    item?.text === "Notes" ? "bg-[#FFF] rounded-[25px]" : ""
                  }`}
                  key={index}
                >
                  <Box className="flex justify-center">{item?.icon}</Box>
                  <Typography
                    className={`flex justify-center p-3 ${
                      item?.text === "Notes" ? "text-[#3361FF]" : ""
                    }`}
                  >
                    {item?.text}
                  </Typography>
                </Box>
              );
            })}
          </Stack>
        </Box>
        {/* <DrawerHeader /> */}
        {/* <Typography component="span" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography component="span" paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Box>
    </Box>
  );
}
