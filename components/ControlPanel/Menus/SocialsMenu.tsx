import React from "react";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNightMode } from "../Providers/NightModeProvider";
import MenuBackdrop from "./MenuBackdrop";

const TextInterfaceMenu = () => {
  const nightMode = useNightMode();
  return (
    <MenuBackdrop>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          color: nightMode.getter! ? "#eae3f1" : "#231f22",
        }}
        variant="h5"
        gutterBottom
        component="div"
      >
        <ConnectWithoutContactRoundedIcon
          sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
        />
        &nbsp; Socials Bay
      </Typography>
    </MenuBackdrop>
  );
};

export default TextInterfaceMenu;
