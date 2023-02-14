import { DefaultTheme } from "styled-components";
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

export type BoxStyledProps = LayoutProps<DefaultTheme> &
  TypographyProps<DefaultTheme> &
  ColorProps<DefaultTheme> &
  SpaceProps<DefaultTheme> &
  BorderProps &
  FlexboxProps<DefaultTheme> & {};
