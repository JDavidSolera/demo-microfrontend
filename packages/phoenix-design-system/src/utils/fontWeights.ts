import type { FontWeights } from "../types";

export enum FontWeightsEnum {
  light = 300,
  regular = 400,
  bold = 700,
}

export const fontWeights: FontWeights = {
  light: FontWeightsEnum.light,
  regular: FontWeightsEnum.regular,
  bold: FontWeightsEnum.bold,
};
