import styled from "styled-components";
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
} from "styled-system";
import type { CardStyledProps } from "./Card.types";

const Card = styled.div<CardStyledProps>`
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: ${({ $elevation }) =>
    $elevation === false
      ? undefined
      : "0px 3px 4px rgba(11, 39, 57, 0.02),0px 2px 2px rgba(11, 39, 57, 0.14), 0px 1px 5px rgba(11, 39, 57, 0.12)"};

  ${layout}
  ${space}
  ${typography}
  ${color}
  ${flexbox}
  ${border}
`;

export default Card;
