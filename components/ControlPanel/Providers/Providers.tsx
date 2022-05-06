import React, { ReactNode } from "react";
import ColorProvider from "./ColorProvider";
import NumberProvider from "./NumberProvider";
import SizeProvider from "./SizeProvider";

import ShadowProvider from "./ShadowProvider";
import RadiusProvider from "./RadiusProvider";
import RotationProvider from "./RotationProvider";
import ConcentricsProvider from "./ConcentricsProvider";
import ShapeProvider from "./ShapeProvider";
import NightModeProvider from "./NightModeProvider";
import TabsSupervisorProvider from "./TabSupervisorProvider";
import ElementTooltip from "./ElementTooltipProvider";

type Props = {
  children: ReactNode;
};
const Providers = ({ children }: Props) => {
  return (
    <ColorProvider>
      <NumberProvider>
        <SizeProvider>
          <ShadowProvider>
            <RotationProvider>
              <RadiusProvider>
                <ShapeProvider>
                  <ConcentricsProvider>
                    <NightModeProvider>
                      {" "}
                      <TabsSupervisorProvider>
                        <ElementTooltip> {children} </ElementTooltip>
                      </TabsSupervisorProvider>
                    </NightModeProvider>
                  </ConcentricsProvider>
                </ShapeProvider>
              </RadiusProvider>
            </RotationProvider>
          </ShadowProvider>
        </SizeProvider>
      </NumberProvider>
    </ColorProvider>
  );
};
export default Providers;
