import { DesignSystemProvider } from "@phoenix/design-system";
import { ThemeProvider } from "styled-components";
import type { ReactNode } from "react";
import appProductTheme from "./appProductTheme";

function AppProductThemeProvider({ children }: { children: ReactNode }) {
  return (
    <DesignSystemProvider>
      <ThemeProvider theme={appProductTheme}>{children}</ThemeProvider>
    </DesignSystemProvider>
  );
}

export default AppProductThemeProvider;
