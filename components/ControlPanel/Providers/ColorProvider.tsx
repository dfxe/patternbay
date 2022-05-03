import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  ReactNode,
} from 'react';

interface ColorAttribute {
  getter: string;
  setter: Dispatch<SetStateAction<string>>;
}

const ColorContext = createContext({
  getter: '#703d67',
  setter: () => {},
} as ColorAttribute);

export const useColors = () => useContext(ColorContext);

type Props = {
  children: ReactNode
}

export default function ColorProvider({ children }:Props) {
  const [pc, setPC] = useState<string>('#703d67');

  return (
    <ColorContext.Provider value={{ getter: pc, setter: setPC }}>
      {children}
    </ColorContext.Provider>
  );
}

