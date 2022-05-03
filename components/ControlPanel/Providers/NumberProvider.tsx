import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

import Button from "@mui/material/Button";

interface ShowNumber {
  getter: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
}

const NumberContext = createContext({
  getter: false,
  setter: () => {},
} as ShowNumber);

export const useShowNumbers = () => useContext(NumberContext);

type Props = {
  children: React.ReactNode;
};
export default function NumberProvider({ children }: Props) {
  const [showNumbers, setShowNumbers] = useState<boolean>(false);

  return (
    <NumberContext.Provider
      value={{ getter: showNumbers, setter: setShowNumbers }}
    >
      {children}
    </NumberContext.Provider>
  );
}
