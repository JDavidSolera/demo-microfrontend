import { ButtonHTMLAttributes } from "react";
import { DefaultTheme } from "styled-components";
import { LayoutProps, SpaceProps } from "styled-system";

export type ButtonVariant =
  | "text"
  | "primary"
  | "secondary"
  | "white"
  | "dark-blue"
  | "success"
  | "success-outlined";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonStyledProps = SpaceProps<DefaultTheme> &
  LayoutProps<DefaultTheme> & {
    $size?: ButtonSize;
    $variant?: ButtonVariant;
  };

export type ButtonCommonProps = ButtonStyledProps & {
  as?: any;
  href?: string;
  label: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};

export type ButtonProps = ButtonCommonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
