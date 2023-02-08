import "styled-components";
import type { BreakPoints } from "./Breakpoints";
import type { Colors } from "./Colors";
import type { FontWeights } from "./FontWeights";
import type { ZIndex } from "./ZIndex";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: "default" | "light" | "dark";
    colors: Colors;
    zIndex: ZIndex;
    space: number[];
    fonts: {
      main: string;
      secondary?: string;
    };
    fontSizes: number[];
    fontWeights: FontWeights;
    breakpoints: BreakPoints;
    transitions: {
      default: string;
      linear: string;
    };
  }
}
