import { DefaultTheme } from "styled-components";
import { LayoutProps, SpaceProps, TypographyProps } from "styled-system";

export type ContainerStyledProps = TypographyProps<DefaultTheme> &
  SpaceProps<DefaultTheme> &
  LayoutProps<DefaultTheme>;
