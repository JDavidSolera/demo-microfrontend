import { DesignSystemProvider } from "@phoenix/design-system";
import { ThemeProvider } from "styled-components";
import type { ReactNode } from "react";
import appOrderTheme from "./appOrderTheme";
import GlobalStyles from "./globalStyles";

function AppOrderThemeProvider({ children }: { children: ReactNode }) {
  return (
    <DesignSystemProvider>
      <ThemeProvider theme={appOrderTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </DesignSystemProvider>
  );
}

export default AppOrderThemeProvider;
