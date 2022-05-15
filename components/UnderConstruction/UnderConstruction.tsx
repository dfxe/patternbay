import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function UnderWork() {
  return (
    <div
      style={{
        backgroundColor: "#f3edf7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant={"h5"}
        sx={{
          backgroundColor: "#f3edf7",
          position: "relative",
          textAlign: "center",
        }}
      >
        {" "}
        Mobile version under work :) Until then you can use the desktop version.
      </Typography>
      <hr style={{ marginLeft: "10vw", marginRight: "10vw" }}></hr>
    </div>
  );
}
