import type { AppProps } from "next/app";
import { AppProductThemeProvider } from "@/theme";
import AppProductProvider from "@/provider/AppProductProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProductThemeProvider>
      <AppProductProvider>
        <Component {...pageProps} />
      </AppProductProvider>
    </AppProductThemeProvider>
  );
}
