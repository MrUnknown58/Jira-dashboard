// import { MenuIcon, AccountCircleIcon } from "@mui/icons-material";
import { Box, Divider, InputBase, Paper, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  return (
    <div className="bg-[#F7F8FA] h-[75px] flex justify-between px-10 items-center">
      <Box className="cursor-pointer border rounded-full flex items-center p-[10px] bg-[#fff]">
        <MenuIcon />
      </Box>
      <Box>Constructor</Box>
      <Box className="md:flex space-x-10 hidden">
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
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
      </Box>
      <Box className="md:hidden flex">
        <AccountCircleIcon sx={{ color: "#C3CAD9", cursor: "pointer" }} />
      </Box>
      <Box className="md:flex space-x-4 items-center hidden">
        <AccountCircleIcon sx={{ color: "#C3CAD9", cursor: "pointer" }} />
        <Typography style={{ cursor: "pointer" }}>Clayton Santos</Typography>
        <Box className="border rounded-full flex items-center p-[10px] bg-[#fff]">
          <NotificationsIcon sx={{ color: "#C3CAD9", cursor: "pointer" }} />
        </Box>
        <Box className="border rounded-full flex items-center p-[10px] bg-[#fff]">
          <CloseIcon sx={{ color: "#C3CAD9", cursor: "pointer" }} />
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
