import { Dashboard } from "@mui/icons-material";
import { Box } from "@mui/material";

const Options = ({ nav, setnav }) => {
  const handleSubmit = (name) => {
    console.log("CLICKED ON OPTIONS");
    console.log(name);
    let newNav = [];
    nav.map((d, i) => {
      if (d?.name === name) {
        newNav.push({ name: name, isSelected: true });
      } else {
        newNav.push({ name: d?.name, isSelected: false });
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
                  ? "border-b-2 border-indigo-500 flex"
                  : "hidden"
              }  md:flex items-center cursor-pointer`}
            >
              <div
                className={`${
                  data?.isSelected ? "text-blue-600 font-bold" : ""
                } space-x-8 px-10`}
                onClick={() => {
                  handleSubmit(data?.name);
                }}
              >
                {data?.name}
              </div>
            </div>
          </Box>
        );
      })}
    </>
  );
};

export default Options;
