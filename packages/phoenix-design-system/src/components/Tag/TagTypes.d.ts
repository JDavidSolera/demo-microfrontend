import { ReactNode } from "react";
import { LayoutProps, SpaceProps, TypographyProps } from "styled-system";

export type TagStyledProps = SpaceProps & TypographyProps & LayoutProps;

export type TagProps = TagStyledProps & {
    children: ReactNode
}
