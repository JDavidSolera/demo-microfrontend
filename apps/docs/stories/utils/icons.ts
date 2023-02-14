import { Reload, ChevronRight, ChevronLeft } from "@phoenix/design-system";

export const iconsMap = {
  Reload,
  ChevronRight,
  ChevronLeft,
};

export const iconControl = {
  type: "select",
  options: [undefined, ...Object.keys(iconsMap)],
};
