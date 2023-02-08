import styled from "styled-components";
import { layout, space } from "styled-system";
import { Swiper } from "swiper/react";
import type { SliderStyledProps } from "./Slider.types";

const Container = styled(Swiper)<SliderStyledProps>`
  ${space}
  ${layout}
`;

const SliderStyled = {
  Container,
};

export default SliderStyled;
