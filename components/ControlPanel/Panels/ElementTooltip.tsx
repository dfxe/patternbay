import React from "react";
import { useElementTooltip } from "../Providers/ElementTooltipProvider";
function ElementTooltip() {
  const tooltip = useElementTooltip();
  return (
    <div hidden={!tooltip.isShown} style={{ position: "absolute" }}>
      sddd
    </div>
  );
}

export default ElementTooltip;
