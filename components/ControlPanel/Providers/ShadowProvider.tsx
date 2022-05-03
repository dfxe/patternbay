import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface ShowShadow {
  getter: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
}

const ShadowContext = createContext({
  getter: false,
  setter: () => {},
} as ShowShadow);

export const useOutline = () => useContext(ShadowContext);

type Props = {
  children: React.ReactNode;
};
export default function ShadowProvider({ children }: Props) {
  const [isShowingShadow, setIsShowingShadow] = useState<boolean>(false);

  return (
    <ShadowContext.Provider
      value={{ getter: isShowingShadow, setter: setIsShowingShadow }}
    >
      {children}
    </ShadowContext.Provider>
  );
}
