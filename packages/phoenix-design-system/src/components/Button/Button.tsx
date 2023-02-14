import { cloneElement } from "react";
import ButtonStyled from "./ButtonStyled";
import type { ButtonProps } from "./ButtonTypes";
import { SpinnerLitte } from '../../icons'

function Button({
  as = "button",
  label,
  iconLeft,
  iconRight,
  isLoading,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <ButtonStyled as={as} {...props}>
      {isLoading && <SpinnerLitte />}
      {iconLeft && cloneElement(iconLeft, { style: { fontSize: "1em" } })}
      {label}
      {iconRight && cloneElement(iconRight, { style: { fontSize: "1em" } })}
    </ButtonStyled>
  );
}

export default Button;
