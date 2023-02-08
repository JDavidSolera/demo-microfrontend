import { Card, Container, Text, ChevronRight } from "@phoenix/design-system";
import { useAppProduct } from "@/provider/AppProductProvider";
import DetailProductHead from "./components/DetailProductHead";
import DetailProductInfo from "./components/DetailProductInfo";
import DetailProductSlider from "./components/DetailProductSlider";
import S from "./DetailProduct.styled";

function DetailProduct() {
  const { state } = useAppProduct();
  return (
    <S.ContentAbsolute active={state.viewDetail}>
      <S.Content>
        <Container>
          <DetailProductHead />
          <Card $elevation={false} mb={{ xs: 2 }}>
            <DetailProductSlider />
            <DetailProductInfo />
          </Card>
          <Card
            color="gray-4"
            display="flex"
            justifyContent="space-between"
            alignItems="cente"
          >
            <Text $size="Body3">Especificaciones técnicas del equipo </Text>
            <ChevronRight />
          </Card>
        </Container>
      </S.Content>
    </S.ContentAbsolute>
  );
}

export default DetailProduct;
