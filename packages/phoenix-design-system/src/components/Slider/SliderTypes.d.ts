import { DefaultTheme } from "styled-components";
import { LayoutProps, SpaceProps } from "styled-system";

export type SliderStyledProps = LayoutProps<DefaultTheme> &
  SpaceProps<DefaultTheme>;

export type SliderProps = SliderStyledProps & {
  options: SwiperOptions;
  children: ReactNode;
};
