import { Button, Text, ChevronLeft } from "@phoenix/design-system";
import { useAppProduct } from "@/provider/AppProductProvider";
import S from "../DetailProduct.styled";

function DetailProductHead() {
  const { handleViewDetail } = useAppProduct();

  return (
    <S.Head>
      <Button
        label=""
        iconLeft={<ChevronLeft />}
        $variant="secondary"
        $size="sm"
        px={2}
        mr={8}
        onClick={handleViewDetail}
      />
      <Text color="gray-4" fontWeight="bold" as="span">
        Detalle del equipo
      </Text>
    </S.Head>
  );
}

export default DetailProductHead;
