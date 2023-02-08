import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        color: ${({ theme }) => theme.colors["secondary-dark"]};
        background: ${({ theme }) => theme.colors["gray-1"]};
    }
`;
