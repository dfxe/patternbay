import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";


interface Tabs {
  tabs: {
    circlePatternsMenu: { isHidden: boolean },
    geometricPatternsMenu: { isHidden: boolean },
    blobMenu: { isHidden: boolean },
    noiseGradientMenu: { isHidden: boolean },
    socialsExpoMenu: { isHidden: boolean },
  };
  setter: Dispatch<SetStateAction<{
    circlePatternsMenu: { isHidden: boolean },
    geometricPatternsMenu: { isHidden: boolean },
    blobMenu: { isHidden: boolean },
    noiseGradientMenu: { isHidden: boolean },
    socialsExpoMenu: { isHidden: boolean },
  }>>;
}

const TabsContext = createContext({
  tabs: {
    circlePatternsMenu: { isHidden: true }, geometricPatternsMenu: { isHidden: false },
    blobMenu: { isHidden: false }, noiseGradientMenu: { isHidden: false }, socialsExpoMenu: { isHidden: false },
  },
  setter: () => {},
} as Tabs);

export const useTabSupervisor = () => useContext(TabsContext);

type Props = {
  children: React.ReactNode;
}
export default function TabsSupervisorProvider({ children }: Props) {
  const [tabStatus, setTabStatus] =
    useState<
      {
        circlePatternsMenu: { isHidden: boolean },
        geometricPatternsMenu: { isHidden: boolean },
        blobMenu: { isHidden: boolean },
        noiseGradientMenu: { isHidden: boolean },
        socialsExpoMenu: { isHidden: boolean }
      }>
      ({
        circlePatternsMenu: { isHidden: false },
        geometricPatternsMenu: { isHidden: true },
        blobMenu: { isHidden: true },
        noiseGradientMenu: { isHidden: true },
        socialsExpoMenu: { isHidden: true },
      });
  return (
    <TabsContext.Provider
      value={{ tabs: tabStatus, setter: setTabStatus }}
    >
      {children}
    </TabsContext.Provider>
  );
}
