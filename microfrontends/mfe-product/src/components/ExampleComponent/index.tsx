import { Container } from "@phoenix/design-system";
import CarouselProducts from "@/components/CarouselProducts";
import AppProductProvider from "@/provider/AppProductProvider";
import { AppProductThemeProvider } from "@/theme";
import DetailProduct from "../DetailProduct";

function ExampleComponent() {
  return (
    <AppProductThemeProvider>
      <AppProductProvider>
        <Container>
          <h1>Hello mfe-product</h1>
          <CarouselProducts />
          <DetailProduct />
        </Container>
      </AppProductProvider>
    </AppProductThemeProvider>
  );
}

export default ExampleComponent;
