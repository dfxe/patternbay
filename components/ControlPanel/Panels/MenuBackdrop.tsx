import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { useNightMode } from "../Providers/NightModeProvider";
type Props = {
  children: React.ReactNode;
};
function MenuBackdrop({ children }: Props) {
  const nightMode = useNightMode();
  const menuBackdropRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (menuBackdropRef.current) {
      //if menuBackdropRef is not null, then check if has a scroll above 50%
      if (
        menuBackdropRef.current.scrollTop >
        menuBackdropRef.current.scrollHeight / 2
      ) {
        //if has, then set nightMode to true
        console.log("scroll");
      }
    }
  }, [menuBackdropRef.current?.scrollTop]);
  return (
    <Box
      ref={menuBackdropRef}
      sx={{
        backgroundColor: nightMode.getter ? "#383e4a" : "#eae3f1",
        border: `5px solid ${nightMode.getter ? "#292d3655" : "#eae3f1"}`,
        borderRadius: "64px",
        padding: "2em 2em 2em 2em",
        paddingBlockEnd: "6em",
        marginBottom: "2vh",
        height: "89vh",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "none",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 100px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
    >
      {children}
    </Box>
  );
}

export default MenuBackdrop;
