import { DefaultTheme } from "styled-components";
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

export type CardStyledProps = TypographyProps<DefaultTheme> &
  SpaceProps<DefaultTheme> &
  LayoutProps<DefaultTheme> &
  ColorProps<DefaultTheme> &
  FlexboxProps<DefaultTheme> &
  BorderProps<DefaultTheme> & {
    $elevation?: boolean;
  };
