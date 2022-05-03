import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface GeometricPatternsShape {
  params: {
    width: number;
    height: number;
    size: number;
    default: { width: number, height: number };
    canvasSize: { width: number, height: number };
    minSize: { width: number, height: number };
    maxSize: { width: number, height: number };
    step: { width: number, height: number };
    backgroundColor: string;
  };
  setter: Dispatch<SetStateAction<{
    width: number;
    height: number;
    size: number;
    default: { width: number, height: number };
    canvasSize: { width: number, height: number };
    minSize: { width: number, height: number };
    maxSize: { width: number, height: number };
    step: { width: number, height: number };
    backgroundColor: string;
  }>>;
  
}

const GPSizeContext = createContext({

  setter: () => { },
  params: {
    width: 80,
    height: 80,
    size: 1,
    default: { width: 1, height: 1 },
    canvasSize: { width: 10, height: 10 },
    minSize: { width: 1, height: 1 },
    maxSize: { width: 10, height: 10 },
    step: { width: 1, height: 1 },
    backgroundColor:"#eae3f1",
  },
} as GeometricPatternsShape);

export const useGPSize = () => useContext(GPSizeContext);

type Props = {
  children: React.ReactNode;
}

export default function GPSizeProvider({ children }:Props) {
  const [params, setParams] = useState<{
    width: number;
    height: number;
    size: number;
    default: { width: number, height: number };
    canvasSize: { width: number, height: number };
    minSize: { width: number, height: number };
    maxSize: { width: number, height: number };
    step: { width: number, height: number };
    backgroundColor: string;
  }>({
    width: 1,
    height: 1,
    size: 1,
    default: { width: 1, height: 1 },
    canvasSize: { width: 10, height: 10 },
    minSize: { width: 1, height: 1 },
    maxSize: { width: 10, height: 10 },
    step: { width: 1, height: 1 },
    backgroundColor:"#eae3f1",
  });

  return (
    <GPSizeContext.Provider value={{ setter: setParams, params:params}}>
      {children}
    </GPSizeContext.Provider>
  );
}
