import { Text } from "@phoenix/design-system";
import { ReactNode } from "react";
import S from "../DetailProduct.styled";

function DetailProductInfoItem({
  title,
  value,
  icon,
}: {
  title: ReactNode;
  icon: ReactNode;
  value?: string;
}) {
  return (
    <S.Item>
      <S.ItemIcon>{icon}</S.ItemIcon>
      <Text fontWeight="bold">{title}</Text>
      <Text style={{ marginLeft: "auto" }}>{value}</Text>
    </S.Item>
  );
}

export default DetailProductInfoItem;
