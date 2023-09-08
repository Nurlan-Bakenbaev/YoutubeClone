import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      p={"2"}
      sx={{
        position: "sticky",
        background: "black",
        top: "0",
        justifyContent: "space-between",
      }}
    >
        <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
          <span className="text-red-500">
            <Link to={'/'}><YouTubeIcon />U-tuber</Link>
          </span>
        </Stack>
    </Stack>
  );
};

export default Navbar;
