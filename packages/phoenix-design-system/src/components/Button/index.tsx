import { cloneElement } from "react";
import S from "./Button.styled";
import type { ButtonProps } from "./Button.types";

function Button({
  as = "button",
  label,
  iconLeft,
  iconRight,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <S.Container {...props}>
      {iconLeft && cloneElement(iconLeft, { style: { fontSize: "1em" } })}
      {label}
      {iconRight && cloneElement(iconRight, { style: { fontSize: "1em" } })}
    </S.Container>
  );
}

export default Button;
