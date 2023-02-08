import { rgba } from "polished";
import styled, { css } from "styled-components";
import { AlertStyledProps } from "./Alert.types";

const Background = styled.div<AlertStyledProps>`
  font-size: 12px;
  border-radius: 8px;
  padding: 8px 16px;
  display: flex;
  gap: 8px;
  align-items: center;

  ${({ $type, theme }) => {
    if ($type === "info") {
      return css`
        background: ${rgba(theme.colors["primary-light"], 0.1)};
        color: ${theme.colors["gray-4"]};
      `;
    }
  }}
`;

const Icon = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;

const AlertStyled = {
  Background,
  Icon,
};

export default AlertStyled;
