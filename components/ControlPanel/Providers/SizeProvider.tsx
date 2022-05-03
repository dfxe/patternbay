import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface SizeGetSet {
  getter: number;
  setter: Dispatch<SetStateAction<number>>;
}

const SizeContext = createContext({
  getter: 1,
  setter: () => {},
} as SizeGetSet);

export const useSize = () => useContext(SizeContext);

type Props = {
  children: React.ReactNode;
};
export default function SizeProvider({ children }: Props) {
  const [entitySize, setEntitySize] = useState<number>(1);
  return (
    <SizeContext.Provider value={{ getter: entitySize, setter: setEntitySize }}>
      {children}
    </SizeContext.Provider>
  );
}
