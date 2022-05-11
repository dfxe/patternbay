import React, { useState } from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Stack from "@mui/material/Stack";
import { useShowNumbers } from "../Providers/NumberProvider";

import { useOutline } from "../Providers/ShadowProvider";
import { useConcentrics } from "../Providers/ConcentricsProvider";

import ClearAlert from "./ClearAlert";

function ActionsPanel() {
  const [showClearAlert, setShowClearAlert] = useState(false);
  const showNumbers = useShowNumbers();
  const concentrics = useConcentrics();
  const showShadow = useOutline();

  const handleClearAll = () => {
    //TODO needs test coverage, concentrics generation behaves erratically
    concentrics.setIsHidden(concentrics.getter.map(() => false));
    // remove all but one element in the concentrics array
    concentrics.setter(concentrics.getter.slice(0, 1));

    concentrics.setIsHidden(concentrics.getter.map(() => true));
  };
  const handleClearAlert = () => {
    setShowClearAlert(true);
  };
  return (
    <Box className="grid grid-cols-2 gap-2">
      <Button
        disabled
        sx={{
          backgroundColor: "#6068d2",
          color: "#fff",
          borderRadius: "64px",
          padding: "1em",
          boxShadow:
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          "&:hover": {
            backgroundColor: "#6f5caa",
          },
          "&:not(:hover)": {
            backgroundColor: "#6068df",
          },
        }}
        variant="contained"
        onClick={() => {}}
      >
        Examples
      </Button>
      <Button
        sx={{
          backgroundColor: "#6068d2",
          color: "#fff",
          borderRadius: "64px",
          padding: "1em",
          boxShadow:
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          "&:hover": {
            backgroundColor: "#6f5caa",
          },
          "&:not(:hover)": {
            backgroundColor: "#6068df",
          },
        }}
        variant="contained"
        onClick={() => showShadow.setter(!showShadow.getter)}
      >
        {showShadow.getter ? "Outline on" : "Outline off"}
      </Button>

      <Button
        sx={{
          backgroundColor: "#6068d2",
          color: "#fff",
          borderRadius: "64px",
          padding: "1em",
          boxShadow:
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          "&:hover": {
            backgroundColor: "#6f5caa",
          },
          "&:not(:hover)": {
            backgroundColor: "#6068df",
          },
        }}
        variant="contained"
        onClick={(e) => {
          e.preventDefault();
          showNumbers.setter(!showNumbers.getter);
        }}
      >
        Show numbers
      </Button>

      <Button
        disabled={concentrics.getter.length === 0}
        sx={{
          backgroundColor: "#6068d2",
          color: "#fff",
          borderRadius: "64px",
          padding: "1em",
          boxShadow:
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          "&:hover": {
            backgroundColor: "#6f5caa",
          },
          "&:not(:hover)": {
            backgroundColor: "#6068df",
          },
        }}
        onClick={() => {
          handleClearAlert();
        }}
      >
        Clear
      </Button>
      <ClearAlert
        open={showClearAlert}
        setOpen={setShowClearAlert}
        confirmDelete={handleClearAll}
      />

      <Stack spacing={1} direction="row" sx={{ mb: 1 }} alignItems="center" />
    </Box>
  );
}

export default ActionsPanel;
