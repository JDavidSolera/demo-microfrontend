import type { AlertProps } from "./Alert.types";
import S from "./Alert.styled";
import { Mobile } from "../../icons";

function Alert({ children, $type, ...props }: AlertProps) {
  return (
    <S.Background $type={$type}>
      <S.Icon>
        <Mobile />
      </S.Icon>
      {children}
    </S.Background>
  );
}

export default Alert;
