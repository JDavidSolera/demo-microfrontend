import buttonMixin from "../../mixins/buttonMixin";
import styled from "styled-components";
import { layout, space } from "styled-system";
import type { ButtonStyledProps } from "./Button.types";
import commonStyles from "./utils/commonStyles";
import getSize from "./utils/getSize";
import getVariant from "./utils/getVariant";

const Container = styled.button<ButtonStyledProps>`
  // base styles
  ${buttonMixin}
  ${commonStyles}

  // sizes
  ${({ $size }) => getSize({ size: $size })}

  //variants
  ${({ $variant }) =>
    getVariant({
      variant: $variant,
    })}

  // add ons
  ${space}
  ${layout}
`;

export default {
  Container,
};
