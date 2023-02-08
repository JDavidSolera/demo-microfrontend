import { ReactNode } from "react";

export type AlertStyledProps = {
  $type: "info" | "warning" | "success";
};

export type AlertProps = AlertStyledProps & {
  children: ReactNode;
};
