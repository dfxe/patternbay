import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface ElementTooltipShape {
  isShown: boolean;
  show: React.Dispatch<React.SetStateAction<boolean>>;
}

const ElementTooltipContext = createContext({
  isShown: false,
  show: () => {},
} as ElementTooltipShape);

export const useElementTooltip = () => useContext(ElementTooltipContext);

type Props = {
  children: React.ReactNode;
};
export default function ElementTooltipProvider({ children }: Props) {
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <ElementTooltipContext.Provider
      value={{ isShown: isShown, show: setIsShown }}
    >
      {children}
    </ElementTooltipContext.Provider>
  );
}
