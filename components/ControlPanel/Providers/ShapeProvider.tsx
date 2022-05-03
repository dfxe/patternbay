import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface ShapeGetSet {
  getter: number;
  setter: Dispatch<SetStateAction<number>>;
}

const ShapeContext = createContext({
  getter: 30,
  setter: () => {},
} as ShapeGetSet);

export const useShape = () => useContext(ShapeContext);

type Props = {
  children: React.ReactNode;
};
export default function ShapeProvider({ children }: Props) {
  const [shape, setShape] = useState<number>(30);
  return (
    <ShapeContext.Provider value={{ getter: shape, setter: setShape }}>
      {children}
    </ShapeContext.Provider>
  );
}
