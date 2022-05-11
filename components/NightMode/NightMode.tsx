//@ts-nocheck
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useNightMode } from "../ControlPanel/Providers/NightModeProvider";
import { styled } from "@mui/material/styles";
import ContrastWarningSnackBar from "../ControlPanel/Menus/ContrastWarningSnackBar";
import Button from "@mui/material/Button";

const M3Switch = styled(Switch)(({ theme }) => ({
  padding: 8,

  "& .MuiSwitch-switchBase": {
    color: "#6068d2",
  },
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    backgroundColor: "#484e7e",
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 100 100" xml:space="preserve"><path d="M88.789 48.135 78.2 41.4c-1.615-1.025-2.595-3.392-2.182-5.261l2.731-12.246c.413-1.868-.774-3.057-2.644-2.643L63.86 23.981c-1.868.414-4.234-.566-5.26-2.181l-6.735-10.589c-1.025-1.615-2.705-1.615-3.73 0L41.399 21.8c-1.025 1.614-3.392 2.594-5.26 2.181L23.894 21.25c-1.869-.414-3.057.775-2.644 2.643l2.731 12.246c.413 1.869-.566 4.235-2.182 5.261L11.21 48.135c-1.614 1.025-1.614 2.705 0 3.73L21.8 58.6c1.615 1.025 2.595 3.393 2.182 5.262L21.25 76.107c-.413 1.867.774 3.057 2.644 2.643l12.246-2.73c1.868-.414 4.234.566 5.26 2.18l6.735 10.59c1.025 1.615 2.705 1.615 3.73 0L58.6 78.198c1.025-1.615 3.392-2.596 5.26-2.178l12.246 2.727c1.869.418 3.057-.771 2.641-2.639l-2.729-12.246c-.416-1.869.563-4.236 2.178-5.262l10.593-6.734c1.614-1.026 1.614-2.706 0-3.731zm-14.17 4.84c-3.987 2.533-6.136 7.723-5.107 12.338l1.204 5.404-5.406-1.205c-.759-.17-1.55-.254-2.351-.254-3.997 0-7.917 2.105-9.987 5.365L50 79.301l-2.976-4.678c-2.066-3.26-5.989-5.365-9.986-5.365-.798 0-1.582.084-2.338.25l-5.416 1.209 1.204-5.404c1.022-4.625-1.13-9.809-5.114-12.34L20.7 50l4.678-2.975c3.98-2.529 6.133-7.712 5.113-12.324l-1.207-5.417 5.403 1.205c.769.169 1.553.254 2.351.254 3.997 0 7.92-2.106 9.99-5.368L50 20.7l2.976 4.678c2.066 3.259 5.989 5.365 9.986 5.365.798 0 1.582-.084 2.338-.25l5.416-1.208-1.204 5.404c-1.022 4.625 1.13 9.808 5.114 12.34L79.3 50l-4.681 2.975z"/><path d="M50 33.333c-9.206 0-16.667 7.461-16.667 16.667 0 9.205 7.461 16.666 16.667 16.666S66.667 59.205 66.667 50c0-9.206-7.461-16.667-16.667-16.667zM50 60c-5.524 0-10-4.477-10-10 0-5.524 4.476-10 10-10s10 4.476 10 10c0 5.523-4.476 10-10 10z"/></svg>')`,

      borderRadius: "50%",
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 100 100"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18A8,8,0,0,1,12,4c.16,0,.316.015.473.024a9.908,9.908,0,0,0,6.194,12.388A8,8,0,0,1,12,20Z"/></svg>')`,
      backgroundColor: "#484e7e",
      borderRadius: "50%",
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
    color: "#6068d2",
  },
}));
const NightMode = () => {
  const nightMode = useNightMode();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.querySelector("body").style.backgroundColor = nightMode.getter
        ? "#231f22"
        : "#f3edf7";
      document.querySelector(".MuiToolbar-root").style.backgroundColor =
        nightMode.getter ? "#231f22" : "#f3edf7";
      document.querySelector(".MuiDrawer-paper").style.backgroundColor =
        nightMode.getter ? "#231f22" : "#f3edf7";
      if (
        document.querySelector("main") !== "undefined" &&
        document.querySelector("main") !== null
      ) {
        document.querySelector("main").style.backgroundColor = nightMode.getter
          ? "#231f22"
          : "#f3edf7";
        document.querySelector(".MuiToolbar-root").style.backgroundColor =
          nightMode.getter ? "#231f22" : "#f3edf7";
        document.querySelector(".MuiDrawer-paper").style.backgroundColor =
          nightMode.getter ? "#231f22" : "#f3edf7";
      }
    }
  }, [nightMode.getter]);

  return (
    <Box
      sx={{
        position: "absolute",

        left: "90%",

        p: 1,
        mr: 0,
        borderRadius: 1,
        zIndex: 100,
      }}
    >
      <FormControlLabel
        control={
          <M3Switch
            sx={{
              mt: 1,
              mr: 0,

              zIndex: "6",
            }}
            defaultChecked={false}
          />
        }
        label=""
        onChange={() => {
          nightMode.setter(!nightMode.getter);
        }}
      />
      <ContrastWarningSnackBar
        workspaceBackgroundColor={nightMode.getter ? "#231f22" : "#f3edf7"}
      />
    </Box>
  );
};

export default NightMode;
