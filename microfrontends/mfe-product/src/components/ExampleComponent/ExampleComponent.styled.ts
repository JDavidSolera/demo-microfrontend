import styled from "styled-components";

const Div = styled.div`
  background: red;
  color: white;
  border-width: 8px;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-style: solid;
`;

export default Div;
