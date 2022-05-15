import type { NextPage } from "next";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Controller from "../components/ControlPanel/Controller";
import Providers from "../components/ControlPanel/Providers/Providers";
import NightMode from "../components/NightMode/NightMode";
import SEO from "../components/SEO/Seo.js";
import UnderConstruction from "../components/UnderConstruction/UnderConstruction";

const Bay: NextPage = () => {
  const mqMin1024 = useMediaQuery("(min-width:1024px)");

  return (
    <div>
      {!mqMin1024 ? (
        <UnderConstruction />
      ) : (
        <Providers>
          <NightMode />

          <main
            style={{
              minHeight: "95vh",
              marginTop: 0,
              paddingTop: 0,
              backgroundColor: "#f3edf7",
            }}
          >
            <Controller />
          </main>
        </Providers>
      )}
    </div>
  );
};

export default Bay;
