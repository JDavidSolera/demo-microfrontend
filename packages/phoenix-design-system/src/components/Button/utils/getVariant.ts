import { css } from "styled-components";
import { ButtonVariant } from "../ButtonTypes";

const getVariant = ({ variant = "primary" }: { variant?: ButtonVariant }) =>
  ({
    text: css`
      padding: 0;
      font-weight: 400;
    `,
    primary: css`
      background: ${({ theme }) => theme.colors.primary};
      color: white;

      &:hover {
        background: ${({ theme }) => theme.colors["primary-dark"]};
      }

      &:disabled {
        background: ${({ theme }) => theme.colors["primary-light"]};
      }
    `,
    secondary: css`
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};

      &:hover {
        border-color: ${({ theme }) => theme.colors["primary-dark"]};
        color: ${({ theme }) => theme.colors["primary-dark"]};
        background: ${({ theme }) => theme.colors["gray-1"]};
      }

      &:disabled {
        border-color: ${({ theme }) => theme.colors["primary-light"]};
        color: ${({ theme }) => theme.colors["primary-light"]};
      }
    `,
    white: css`
      background: white;
      color: ${({ theme }) => theme.colors.primary};

      &:hover {
        color: ${({ theme }) => theme.colors["primary-dark"]};
        background: ${({ theme }) => theme.colors["gray-1"]};
      }

      &:disabled {
        color: ${({ theme }) => theme.colors["primary-light"]};
      }
    `,
    "dark-blue": css`
      background: ${({ theme }) => theme.colors["secondary-dark"]};
      color: white;

      &:hover {
        background: ${({ theme }) => theme.colors.secondary};
      }

      &:disabled {
        background: ${({ theme }) => theme.colors["secondary-light"]};
      }
    `,
    success: css`
      background: ${({ theme }) => theme.colors.success};
      color: white;

      &:hover {
        background: ${({ theme }) => theme.colors["success-dark"]};
      }

      &:disabled {
        background: ${({ theme }) => theme.colors["success-light"]};
      }
    `,
    "success-outlined": css`
      border: 1px solid ${({ theme }) => theme.colors.success};
      color: ${({ theme }) => theme.colors.success};

      &:hover {
        border-color: ${({ theme }) => theme.colors["success-dark"]};
        color: ${({ theme }) => theme.colors["success-dark"]};
        background: ${({ theme }) => theme.colors["gray-1"]};
      }

      &:disabled {
        border-color: ${({ theme }) => theme.colors["success-light"]};
        color: ${({ theme }) => theme.colors["success-light"]};
      }
    `,
  }[variant]);

export default getVariant;
