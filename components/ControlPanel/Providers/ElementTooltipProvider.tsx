import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface ElementTooltipShape {
  isShown: { elementId: string; isShown: boolean };
  show: React.Dispatch<
    React.SetStateAction<{ elementId: string; isShown: boolean }>
  >;
  colors: string[];
  setColors: Dispatch<SetStateAction<string[]>>;
}

const ElementTooltipContext = createContext({
  isShown: { elementId: "", isShown: false },
  show: () => {},
  colors: [],
  setColors: () => {},
} as ElementTooltipShape);

export const useElementTooltip = () => useContext(ElementTooltipContext);

type Props = {
  children: React.ReactNode;
};
export default function ElementTooltipProvider({ children }: Props) {
  const [isShown, setIsShown] = useState({ elementId: "", isShown: false });
  const [colorsFromPalette, setColorsFromPalette] = useState<string[]>([]);
  return (
    <ElementTooltipContext.Provider
      value={{
        isShown: isShown,
        show: setIsShown,
        colors: colorsFromPalette,
        setColors: setColorsFromPalette,
      }}
    >
      {children}
    </ElementTooltipContext.Provider>
  );
}
