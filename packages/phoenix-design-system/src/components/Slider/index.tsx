import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import S from "./Slider.styled";
import type { SliderProps } from "./Slider.types";
import { Pagination, Thumbs } from "swiper";

function Slider({ options, children, ...rest }: SliderProps) {
  return (
    <S.Container {...options} {...rest} modules={[Pagination, Thumbs]}>
      {children}
    </S.Container>
  );
}

export default Slider;
