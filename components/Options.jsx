import { Dashboard } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Options = ({ nav, setnav }) => {
  const handleSubmit = (name) => {
    console.log("CLICKED ON OPTIONS");
    console.log(name);
    let newNav = [];
    nav.map((d, i) => {
      if (d?.name === name) {
        newNav.push({ ...d, isSelected: true });
      } else {
        newNav.push({ ...d, isSelected: false });
      }
    });
    console.log(newNav);
    setnav(newNav);
  };
  return (
    <>
      {nav.map((data, index) => {
        return (
          <Box key={index}>
            <div
              className={`${
                data?.isSelected
                  ? " border-b-2 border-indigo-500 flex"
                  : "hidden"
              }  md:flex pb-2 w-36 items-center justify-center cursor-pointer`}
            >
              <div
                className={`${
                  data?.isSelected
                    ? "text-blue-600 font-bold"
                    : "text-[#7D8FB3]"
                } flex items-center space-x-2`}
                onClick={() => {
                  handleSubmit(data?.name);
                }}
              >
                {data?.image && (
                  <Image src={data?.image} width={30} height={30} alt="" />
                )}
                {data?.icon && data?.icon}
                <Typography fontSize={12} fontWeight={700}>
                  {data?.name}
                </Typography>
              </div>
            </div>
          </Box>
        );
      })}
    </>
  );
};

export default Options;
