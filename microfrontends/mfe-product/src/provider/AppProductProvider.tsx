import { useToggle } from "@phoenix/hooks";
import { createContext, ReactNode, useContext, useMemo } from "react";

export interface AppProductState {}

export interface AppProductStore {
  state: {
    viewDetail: boolean;
  };
  handleViewDetail: () => void;
}

export const AppProductContext = createContext<AppProductStore>(
  {} as AppProductStore
);

export const useAppProduct = () => useContext(AppProductContext);

export default function AppProductProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [viewDetail, setViewDetail] = useToggle(false);

  const providerValue = useMemo(
    () => ({
      state: {
        viewDetail,
      },
      handleViewDetail: setViewDetail,
    }),
    [setViewDetail, viewDetail]
  );

  return (
    <AppProductContext.Provider value={providerValue}>
      {children}
    </AppProductContext.Provider>
  );
}
