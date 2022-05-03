import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  ReactNode,
} from "react";

interface NightModeAttributes {
  getter: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
}

const NightModeContext = createContext({
  getter: true,
  setter: () => {},
} as NightModeAttributes);

export const useNightMode = () => useContext(NightModeContext);

type Props = {
  children: ReactNode
}
export default function NightModeProvider({ children }:Props) {
  const [isNightMode, setIsNightMode] = useState<boolean>(true);

  return (
    <NightModeContext.Provider
      value={{ getter: isNightMode, setter: setIsNightMode }}
    >
      {children}
    </NightModeContext.Provider>
  );
}
