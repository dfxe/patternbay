import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface RadiusGetSet {
  getter: number;
  setter: Dispatch<SetStateAction<number>>;
}

const RadiusContext = createContext({
  getter: 0.2,
  setter: () => {},
} as RadiusGetSet);

export const useRadius = () => useContext(RadiusContext);

type Props = {
  children: React.ReactNode;
};
export default function RadiusProvider({ children }: Props) {
  const [entityRadius, setEntityRadius] = useState<number>(0.2);
  return (
    <RadiusContext.Provider
      value={{ getter: entityRadius, setter: setEntityRadius }}
    >
      {children}
    </RadiusContext.Provider>
  );
}
