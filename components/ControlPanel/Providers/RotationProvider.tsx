import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface Vector2 {
  x: number;
  y: number;
}
interface RotationGetSet {
  getter: Vector2;
  setter: Dispatch<SetStateAction<Vector2>>;
}

const RotationContext = createContext({
  getter: { x: 1, y: 1 },
  setter: () => {},
} as RotationGetSet);

export const useRotation = () => useContext(RotationContext);

type Props = {
  children: React.ReactNode;
};
export default function RotationProvider({ children }: Props) {
  const [rotation, setRotation] = useState<Vector2>({ x: 1, y: 1 });
  return (
    <RotationContext.Provider value={{ getter: rotation, setter: setRotation }}>
      {children}
    </RotationContext.Provider>
  );
}
