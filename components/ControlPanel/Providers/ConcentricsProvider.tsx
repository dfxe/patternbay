import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  ReactNode,
} from "react";

interface ConcentricsGetSet {
  getter:
    | {
        dKey: string;
        size: number;
        concentricsNumber: number;
        removeThis: (event: { target: { value: number } }) => void;
      }[]
    | [];
  setter: Dispatch<
    SetStateAction<
      | {
          dKey: string;
          size: number;
          concentricsNumber: number;
          removeThis: (event: { target: { value: number } }) => void;
        }[]
      | []
    >
  >;
  params: { minConcentrics: number; maxConcentrics: number; step: number };
  isHidden: boolean[];
  setIsHidden: Dispatch<SetStateAction<boolean[]>>;
  entityData: any[];
  setEntityData: Dispatch<SetStateAction<[]>>;
  concentricsCoords: [];
  setConcentricsCoords: Dispatch<SetStateAction<[]>>;
}

const ConcentricsContext = createContext({
  getter: [],
  setter: () => {},
  params: { minConcentrics: 1, maxConcentrics: 5, step: 0.5 },
  isHidden: [],
  setIsHidden: () => {},
  entityData: [],
  setEntityData: () => {},
  concentricsCoords: [],
  setConcentricsCoords: () => {},
} as ConcentricsGetSet);

export const useConcentrics = () => useContext(ConcentricsContext);

type Props = {
  children: ReactNode;
};
export default function RadiusProvider({ children }: Props) {
  const [concentrics, setConcentrics] = useState<
    | {
        dKey: string;
        size: number;
        concentricsNumber: number;
        removeThis: (event: { target: { value: number } }) => void;
      }[]
    | []
  >([]);
  const [entities, setEntities] = useState<[]>([]);
  const [concentricsCoords, setConcentricsCoords] = useState<[]>([]);

  const concentricsParams = {
    minConcentrics: 1,
    maxConcentrics: 10,
    step: 0.5,
  };
  const [onOff, setOnOff] = useState(
    new Array(concentricsParams.maxConcentrics).fill(true) as boolean[]
  );

  return (
    <ConcentricsContext.Provider
      value={{
        getter: concentrics,
        setter: setConcentrics,
        params: concentricsParams,
        isHidden: onOff,
        setIsHidden: setOnOff,
        entityData: entities,
        setEntityData: setEntities,
        concentricsCoords: concentricsCoords,
        setConcentricsCoords: setConcentricsCoords,
      }}
    >
      {children}
    </ConcentricsContext.Provider>
  );
}
