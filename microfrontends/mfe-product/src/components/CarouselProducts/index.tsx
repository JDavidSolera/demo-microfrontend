import { Slide, Slider } from "@phoenix/design-system";
import { useAppProduct } from "@/provider/AppProductProvider";
import CardProduct from "../CardProduct";

function CarouselProducts() {
  const { handleViewDetail } = useAppProduct();

  const options = {
    spaceBetween: 16,
    slidesPerView: 1.1,
  };

  return (
    <Slider options={options}>
      <Slide>
        <CardProduct handleViewDetail={handleViewDetail} />
      </Slide>
      <Slide>
        <CardProduct handleViewDetail={handleViewDetail} />
      </Slide>
      <Slide>
        <CardProduct handleViewDetail={handleViewDetail} />
      </Slide>
      <Slide>
        <CardProduct handleViewDetail={handleViewDetail} />
      </Slide>
    </Slider>
  );
}

export default CarouselProducts;
