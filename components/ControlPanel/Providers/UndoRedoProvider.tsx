import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import { useConcentrics } from "./ConcentricsProvider";
import { useRadius } from "./RadiusProvider";
import { useRotation } from "./RotationProvider";
import { useSize } from "./SizeProvider";
import { useOutline } from "./ShadowProvider";
import { useShape } from "./ShapeProvider";
import { useColors } from "./ColorProvider";

interface StatesGetSet {
  undo: {};
  redo: Dispatch<SetStateAction<number>>;
}

const UndoRedoContext = createContext({
  undo: {},
  redo: () => {},
} as StatesGetSet);

export const useUndoRedo = () => useContext(UndoRedoContext);

type Props = {
  children: React.ReactNode;
};
export default function UndoRedoProvider({ children }: Props) {
  const [concentrics, radius, rotation, size, outline, shape, colors] = [
    useConcentrics(),
    useRadius(),
    useRotation(),
    useSize(),
    useOutline(),
    useShape(),
    useColors(),
  ];
  const [present, setPresent] = useState<any[]>([
    {
      concentrics: concentrics.getter,
      radius: radius.getter,
      rotation: rotation.getter,
      size: size.getter,
      outline: outline.getter,
      shape: shape.getter,
      colors: colors.getter,
    },
  ]);
  const [anti, setAnti] = useState<any[]>(present);
  useEffect(() => {
    concentrics.setter(anti[anti.length - 1].concentrics);
    radius.setter(anti[anti.length - 1].radius);
    rotation.setter(anti[anti.length - 1].rotation);

    size.setter(anti[anti.length - 1].size);
    outline.setter(anti[anti.length - 1].outline);
    shape.setter(anti[anti.length - 1].shape);
    colors.setter(anti[anti.length - 1].colors);
  }, [anti]);

  return (
    <UndoRedoContext.Provider
      value={{
        undo: () => {
          setAnti([...anti, present[present.length - 1]]);
          setPresent(present.filter((_, i) => i !== present.length - 1));
        },
        redo: () => {
          setPresent([...present, anti.pop()]);
          setAnti(anti.filter((_, i) => i !== anti.length - 1));
        },
      }}
    >
      {children}
    </UndoRedoContext.Provider>
  );
}
