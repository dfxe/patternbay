import React, { useEffect } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useColors } from "../Providers/ColorProvider";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));
Alert.displayName = "Alert";

type RGB = {
  r: number;
  g: number;
  b: number;
};

type Props = {
  workspaceBackgroundColor: string;
};

export default function WarningSnackbar({ workspaceBackgroundColor }: Props) {
  const [open, setOpen] = React.useState<boolean>(false);
  const colorProvider = useColors();

  const lowercaseHex = (hex: string): string => {
    if (typeof hex === "string") {
      const uppers = ["A", "B", "C", "D", "E", "F"];
      return hex.replace(/[A-F]/g, (letter: string) =>
        uppers.indexOf(letter) > -1 ? letter.toLowerCase() : letter
      );
    }
    return "#aaa";
  };

  const hexToRgb = (hex: string): RGB => {
    try {
      if (hex.length > 7 || hex.length === 5 || hex.length === 0) {
        throw new Error(
          "Invalid hex color. Hex must be 3 or 6 characters in length and type string. Transparency is not supported."
        );
      } else {
        // @ts-ignore
        const rgbObject: number[] =
          lowercaseHex(hex) ??
          lowercaseHex(hex)
            ?.replace(
              /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              (_m: string, r: string, g: string, b: string) =>
                `#${r}${r}${g}${g}${b}${b}`
            )
            ?.substring(1)
            ?.match(/.{2}/g)
            ?.map((x) => parseInt(x, 16));
        return { r: rgbObject[0], g: rgbObject[1], b: rgbObject[2] };
      }
    } catch (err) {
      throw err;
    }
  };

  const getLuminance = (color: string): number => {
    const rgb: RGB = hexToRgb(color);
    return Math.ceil(0.2126 * rgb?.r + 0.7152 * rgb?.g + 0.0722 * rgb?.b);
  };
  const getContrastDiff = (color1: string, color2: string) =>
    Math.abs(getLuminance(color1) - getLuminance(color2));

  useEffect(() => {
    setOpen(
      getContrastDiff(workspaceBackgroundColor, colorProvider.getter) < 20
    );
  }, [colorProvider.getter]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ position: "absolute", width: "100%" }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Pattern may not be visible with this background color.
        </Alert>
      </Snackbar>
    </Stack>
  );
}
