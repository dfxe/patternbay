import React, { useEffect, useState } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ListItemIcon from "@mui/material/ListItemIcon";
import GradientRoundedIcon from "@mui/icons-material/GradientRounded";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";

import useMediaQuery from "@mui/material/useMediaQuery";
import InterestsRoundedIcon from "@mui/icons-material/InterestsRounded";
//@ts-ignore
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";

import HelpIcon from "@mui/icons-material/Help";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ExportData from "./ExportData";
import InfoModal from "./InfoModal";

import BrandLogo from "../../../images/BrandLogo";

import { useNightMode } from "../Providers/NightModeProvider";

import { useTabSupervisor } from "../Providers/TabSupervisorProvider";
import ListItemButton from "@mui/material/ListItemButton";
import BlobSVGMenuSidebar from "../../../images/MenuSidebarBlob";
import Link from "next/link";
import ExportToPng from "./ExportToPng";

const drawerWidth = 73;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  borderRight: "none",
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
  backgroundColor: "#eae3f1",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRight: "none",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: 0,
  borderRight: "none",
  boxShadow: "none",

  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    borderRight: "none",
    boxShadow: "none",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  borderRight: "none",
  ...(open && {
    ...openedMixin(theme),

    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),

    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const MenuSidebar = () => {
  const [open, setOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const tabSupervisor = useTabSupervisor();
  const mqMin1024 = useMediaQuery("(min-width: 1024px)");
  const nightMode = useNightMode();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", m: 0, p: 0 }}>
      <CssBaseline />
      <AppBar
        aria-label="App Bar Header"
        position="fixed"
        sx={{
          backgroundColor: "#eae3f1",
          color: "#1e1d1f",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          m: 0,
        }}
      >
        <Toolbar sx={{ m: 0 }}>
          <Link passHref href="/">
            <Typography
              variant={mqMin1024 ? "h4" : "h6"}
              sx={{
                textAlign: "center",
                m: 0,
                color: nightMode.getter ? "#f3edf7" : "#231f22",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              gutterBottom
              component="div"
            >
              Pattern Bay
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        aria-label="Drawer Sidebar"
        variant="permanent"
        open={open}
        sx={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {/* Brand logo */}
            <BrandLogo />
          </IconButton>
        </DrawerHeader>

        {/* The space between header and the buttons */}
        <Box
          aria-label="Space Between Header And Buttons"
          sx={{ height: "20vh", borderRight: "none" }}
        />

        <List sx={{ marginLeft: 0, paddingLeft: 0 }}>
          <ListItemButton
            aria-label="Circlezs Menu"
            sx={{
              backgroundColor: tabSupervisor.tabs.circlePatternsMenu.isHidden
                ? nightMode.getter
                  ? "#231f22"
                  : "#f3edf7"
                : nightMode.getter
                ? "#230f22"
                : "#eae3f1",
            }}
            onClick={() => {
              tabSupervisor.setter(() => ({
                circlePatternsMenu: { isHidden: false },
                geometricPatternsMenu: { isHidden: true },
                blobMenu: { isHidden: true },
                noiseGradientMenu: { isHidden: true },
                socialsExpoMenu: { isHidden: true },
              }));
            }}
          >
            <ListItemIcon
              sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
            >
              {/* Circlez */}
              <WorkspacesRoundedIcon />
            </ListItemIcon>
          </ListItemButton>

          <Divider />

          <ListItemButton
            aria-label="Aestheticz Menu"
            sx={{
              backgroundColor: tabSupervisor.tabs.geometricPatternsMenu.isHidden
                ? nightMode.getter
                  ? "#231f22"
                  : "#f3edf7"
                : nightMode.getter
                ? "#230f22"
                : "#eae3f1",
            }}
          >
            <ListItemIcon
              sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
              onClick={() => {
                tabSupervisor.setter(() => ({
                  circlePatternsMenu: { isHidden: true },
                  geometricPatternsMenu: { isHidden: false },
                  blobMenu: { isHidden: true },
                  noiseGradientMenu: { isHidden: true },
                  socialsExpoMenu: { isHidden: true },
                }));
              }}
            >
              {/* Aesthetic Shapes */}
              <InterestsRoundedIcon />
            </ListItemIcon>
          </ListItemButton>

          <Divider />

          <ListItemButton
            aria-label="Aestheticz Menu"
            sx={{
              backgroundColor: tabSupervisor.tabs.blobMenu.isHidden
                ? nightMode.getter
                  ? "#231f22"
                  : "#f3edf7"
                : nightMode.getter
                ? "#230f22"
                : "#e3ddea",
            }}
          >
            <ListItemIcon
              sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
              onClick={() => {
                if (tabSupervisor.tabs.blobMenu.isHidden) {
                  tabSupervisor.setter(() => ({
                    circlePatternsMenu: { isHidden: true },
                    geometricPatternsMenu: { isHidden: true },
                    blobMenu: { isHidden: false },
                    noiseGradientMenu: { isHidden: true },
                    socialsExpoMenu: { isHidden: true },
                  }));
                }
              }}
            >
              {/* Blob Shapes */}
              <BlobSVGMenuSidebar
                color={nightMode.getter ? "#eae3f1" : "#231f22"}
              />
            </ListItemIcon>
          </ListItemButton>
          <Divider />

          <ListItemButton
            aria-label="Gradientz Menu"
            sx={{
              backgroundColor: tabSupervisor.tabs.noiseGradientMenu.isHidden
                ? nightMode.getter
                  ? "#231f22"
                  : "#f3edf7"
                : nightMode.getter
                ? "#230f22"
                : "#eae3f1",
            }}
          >
            <ListItemIcon
              sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
              onClick={() => {
                if (tabSupervisor.tabs.noiseGradientMenu.isHidden) {
                  tabSupervisor.setter(() => ({
                    circlePatternsMenu: { isHidden: true },
                    geometricPatternsMenu: { isHidden: true },
                    blobMenu: { isHidden: true },
                    noiseGradientMenu: { isHidden: false },
                    socialsExpoMenu: { isHidden: true },
                  }));
                }
              }}
            >
              {/* Gradients */}
              <GradientRoundedIcon
                sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
              />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            aria-label="Gradientz Menu"
            sx={{
              backgroundColor: tabSupervisor.tabs.socialsExpoMenu.isHidden
                ? nightMode.getter
                  ? "#231f22"
                  : "#f3edf7"
                : nightMode.getter
                ? "#230f22"
                : "#eae3f1",
            }}
          >
            <ListItemIcon
              sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
              onClick={() => {
                if (tabSupervisor.tabs.socialsExpoMenu.isHidden) {
                  tabSupervisor.setter(() => ({
                    circlePatternsMenu: { isHidden: true },
                    geometricPatternsMenu: { isHidden: true },
                    blobMenu: { isHidden: true },
                    noiseGradientMenu: { isHidden: true },
                    socialsExpoMenu: { isHidden: false },
                  }));
                }
              }}
            >
              {/* Gradients */}
              <ConnectWithoutContactRoundedIcon
                sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
              />
            </ListItemIcon>
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItemButton
            aria-label="Export Circlezs"
            onClick={() => setExportOpen(true)}
          >
            <ListItemIcon
              sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
            >
              <ExitToAppRoundedIcon />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            aria-label="Info Modal"
            onClick={() => setHelpOpen(true)}
          >
            <ListItemIcon
              sx={{ color: nightMode.getter ? "#eae3f1" : "#231f22" }}
            >
              <HelpIcon />
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>

      <DrawerHeader />

      <ExportData
        canDisplay={!tabSupervisor.tabs.circlePatternsMenu.isHidden}
        open={exportOpen}
        setOpen={setExportOpen}
      />

      <ExportToPng
        canDisplay={tabSupervisor.tabs.circlePatternsMenu.isHidden}
        open={exportOpen}
        setOpen={setExportOpen}
      />

      <InfoModal open={helpOpen} setOpen={setHelpOpen} />
    </Box>
  );
};
export default MenuSidebar;
