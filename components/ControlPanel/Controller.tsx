import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import CircleUnit from "../CircleGrid/CircleUnit";

import { useNightMode } from "./Providers/NightModeProvider";
import { useTabSupervisor } from "./Providers/TabSupervisorProvider";
import { useConcentrics } from "./Providers/ConcentricsProvider";

import MenuSidebar from "./Panels/MenuSidebar";
import BlobMenu from "../ControlPanel/Panels/BlobMenu";
import NoiseGradientMenu from "../ControlPanel/Panels/NoiseGradientMenu";
import GeometricShapes from "./Panels/AestheticsMenu";
import CirclePatternsMenu from "./Panels/CirclesMenu";
import TextInterfaceMenu from "./Panels/SocialsMenu";
export default function Controller() {
  const mqMin1024 = useMediaQuery("(min-width:1024px)");
  const concentrics = useConcentrics();
  const tabSupervisor = useTabSupervisor();
  const nightMode = useNightMode();

  const LOCAL_STORAGE_KEY: string = "css-circle-pattern-last-state";

  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      // @ts-ignore
      const entityStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (entityStorage) {
        concentrics.setter(entityStorage);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(concentrics.getter));
  }, [concentrics.getter]);

  return (
    <Box
      sx={{
        position: mqMin1024 ? "fixed" : "absolute",
        top: "80px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "1fr",
        gridColumnGap: "2vw",
        gridRowGap: "2vh",
      }}
    >
      <MenuSidebar />
      {tabSupervisor.tabs.circlePatternsMenu.isHidden ? (
        <Box />
      ) : (
        <Box aria-label="Circlezs Menu Sliders" sx={{ zIndex: 4 }}>
          {concentrics.getter.map(
            (item, i) =>
              concentrics.isHidden[i] && (
                <CircleUnit
                  key={item.dKey}
                  concentricsNumber={item.concentricsNumber}
                />
              )
          )}
        </Box>
      )}
      <Box
        sx={{
          width: mqMin1024 ? "100vw" : "80vw",
          height: mqMin1024 ? "90vh" : "35vh",
          backgroundColor: mqMin1024 ? "#ffd7e422" : "#eae3f1",
          borderRadius: "64px 0 0 64px",
          marginLeft: 0,
          paddingLeft: 0,
          top: mqMin1024 ? "8vh" : "14vh",
          backgroundImage: nightMode.getter
            ? "radial-gradient(#63687b 0.5px, #292d36 0.5px)"
            : "radial-gradient(darkorchid 0.5px, #e5e5f7 0.5px)",
          backgroundSize: "10px 10px",
          boxShadow:
            "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
          zIndex: mqMin1024 ? "0" : "10",
        }}
      >
        <Box
          sx={{
            width: mqMin1024 ? "23vw" : "80vw",
            top: mqMin1024 ? 0 : "50vh",
          }}
          hidden={tabSupervisor.tabs.circlePatternsMenu.isHidden}
        >
          <CirclePatternsMenu />
        </Box>

        <Box
          sx={{
            width: mqMin1024 ? "23vw" : "80vw",
            top: mqMin1024 ? 0 : "50vh",
          }}
          hidden={tabSupervisor.tabs.geometricPatternsMenu.isHidden}
        >
          <GeometricShapes />
        </Box>

        <Box
          sx={{
            width: mqMin1024 ? "23vw" : "80vw",
            top: mqMin1024 ? 0 : "50vh",
          }}
          hidden={tabSupervisor.tabs.blobMenu.isHidden}
        >
          <BlobMenu />
        </Box>

        <Box
          sx={{
            width: mqMin1024 ? "23vw" : "80vw",
            top: mqMin1024 ? 0 : "50vh",
          }}
          hidden={tabSupervisor.tabs.noiseGradientMenu.isHidden}
        >
          <NoiseGradientMenu />
        </Box>
        <Box
          sx={{
            width: mqMin1024 ? "23vw" : "80vw",
            top: mqMin1024 ? 0 : "50vh",
          }}
          hidden={tabSupervisor.tabs.socialsExpoMenu.isHidden}
        >
          <TextInterfaceMenu />
        </Box>
      </Box>
    </Box>
  );
}
