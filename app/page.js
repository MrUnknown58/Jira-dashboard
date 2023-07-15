import Dashboard from "@/components/Dashboard";
import SideBar from "@/components/SideBar";
import { Box } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Box className="pt-10 px-10 h-[81px] bg-[#F7F8FA]">
        <Dashboard />
      </Box>
    </>
  );
}
