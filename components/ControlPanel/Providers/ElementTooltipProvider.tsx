import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface ElementTooltipShape {
  elementToShow: { elementId: string; isShown: boolean };
  show: React.Dispatch<
    React.SetStateAction<{ elementId: string; isShown: boolean }>
  >;

  colors: string[];
  setColors: Dispatch<SetStateAction<string[]>>;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<boolean>>;
}

const ElementTooltipContext = createContext({
  elementToShow: { elementId: "", isShown: false },
  show: () => {},
  colors: [],
  setColors: () => {},
  selected: false,
  setSelected: () => {},
} as ElementTooltipShape);

export const useElementTooltip = () => useContext(ElementTooltipContext);

type Props = {
  children: React.ReactNode;
};
export default function ElementTooltipProvider({ children }: Props) {
  const [isShown, setIsShown] = useState({ elementId: "", isShown: false });
  const [colorsFromPalette, setColorsFromPalette] = useState<string[]>([]);
  const [selected, setSelected] = useState(false);
  return (
    <ElementTooltipContext.Provider
      value={{
        elementToShow: isShown,
        show: setIsShown,
        colors: colorsFromPalette,
        setColors: setColorsFromPalette,
        selected: selected,
        setSelected: setSelected,
      }}
    >
      {children}
    </ElementTooltipContext.Provider>
  );
}
