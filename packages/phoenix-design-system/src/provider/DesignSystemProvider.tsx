import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme";
import { GlobalStyles } from "../utils";

function DesignSystemProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default DesignSystemProvider;
