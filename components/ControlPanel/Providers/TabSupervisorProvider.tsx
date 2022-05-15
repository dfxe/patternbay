import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";

interface Tabs {
  tabs: {
    circlePatternsMenu: { isHidden: boolean };
    geometricPatternsMenu: { isHidden: boolean };
    blobMenu: { isHidden: boolean };
    noiseGradientMenu: { isHidden: boolean };
    socialsExpoMenu: { isHidden: boolean };
  };
  setter: Dispatch<
    SetStateAction<{
      circlePatternsMenu: { isHidden: boolean };
      geometricPatternsMenu: { isHidden: boolean };
      blobMenu: { isHidden: boolean };
      noiseGradientMenu: { isHidden: boolean };
      socialsExpoMenu: { isHidden: boolean };
    }>
  >;
  currentTabName: string;
}

const TabsContext = createContext({
  tabs: {
    circlePatternsMenu: { isHidden: true },
    geometricPatternsMenu: { isHidden: false },
    blobMenu: { isHidden: false },
    noiseGradientMenu: { isHidden: false },
    socialsExpoMenu: { isHidden: false },
  },
  setter: () => {},
  currentTabName: "",
} as Tabs);

export const useTabSupervisor = () => useContext(TabsContext);

type Props = {
  children: React.ReactNode;
};
export default function TabsSupervisorProvider({ children }: Props) {
  const [tabStatus, setTabStatus] = useState<{
    circlePatternsMenu: { isHidden: boolean };
    geometricPatternsMenu: { isHidden: boolean };
    blobMenu: { isHidden: boolean };
    noiseGradientMenu: { isHidden: boolean };
    socialsExpoMenu: { isHidden: boolean };
  }>({
    circlePatternsMenu: { isHidden: false },
    geometricPatternsMenu: { isHidden: true },
    blobMenu: { isHidden: true },
    noiseGradientMenu: { isHidden: true },
    socialsExpoMenu: { isHidden: true },
  });
  const [currentTabName, setCurrentTabName] = useState("");
  useEffect(() => {
    if (tabStatus.blobMenu.isHidden === false) {
      setCurrentTabName("Blobs Bay");
    } else if (tabStatus.circlePatternsMenu.isHidden === false) {
      setCurrentTabName("Concentrics Bay");
    } else if (tabStatus.geometricPatternsMenu.isHidden === false) {
      setCurrentTabName("Aesthetics Bay");
    } else if (tabStatus.noiseGradientMenu.isHidden === false) {
      setCurrentTabName("Noise Bay");
    } else if (tabStatus.socialsExpoMenu.isHidden === false) {
      setCurrentTabName("Socials Bay");
    }
  }, [tabStatus]);
  return (
    <TabsContext.Provider
      value={{ tabs: tabStatus, setter: setTabStatus, currentTabName }}
    >
      {children}
    </TabsContext.Provider>
  );
}
