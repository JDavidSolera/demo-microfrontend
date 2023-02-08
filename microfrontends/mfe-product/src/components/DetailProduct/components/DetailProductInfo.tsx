import {
  Text,
  Batery,
  Cloud,
  Mobile,
  RearCamera,
} from "@phoenix/design-system";
import DetailProductItem from "./DetailProductInfoItem";
import S from "../DetailProduct.styled";

function DetailProductInfo() {
  return (
    <>
      <Text color="gray-4" mb={{ xs: 3 }}>
        Especificaciones generales del equipo
      </Text>
      <S.List>
        <DetailProductItem icon={<Cloud />} title="Memoria" value="64 GB" />
        <DetailProductItem icon={<Batery />} title="Batería" value="22 h" />
        <DetailProductItem
          icon={<Mobile />}
          title="Pantalla 5,8"
          value="22 h"
        />
        <DetailProductItem icon={<RearCamera />} title="Cámara" value="8 MP" />
      </S.List>
    </>
  );
}

export default DetailProductInfo;
