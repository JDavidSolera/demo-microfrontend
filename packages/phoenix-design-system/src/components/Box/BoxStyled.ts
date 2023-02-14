import styled from "styled-components";
import {
  typography,
  space,
  color,
  layout,
  flexbox,
  border,
} from "styled-system";
import type { BoxStyledProps } from "./BoxTypes";

const Box = styled.div<BoxStyledProps>`
  ${typography}
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
`;
export default Box;
