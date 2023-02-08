import { Card } from "@phoenix/design-system";
import styled from "styled-components";

const Wrapper = styled(Card)`
  overflow: hidden;
  padding: 0 !important;
`;

const Body = styled.div`
  padding: 0 16px 24px;
  display: flex;
  flex-wrap: wrap;
`;

const HeadBand = styled.div`
  background: ${({ theme }) => theme.colors["secondary-dark"]};
  color: white;
  margin-bottom: 24px;
  padding: 8px 0;
`;

const Photo = styled.div`
  width: 50%;
  height: 230px;
  max-width: 150px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Info = styled.div`
  width: 50%;
`;

const ButtonDetail = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border-style: none;
  font-size: 14px;
  line-height: 20px;
  padding: 0;
  margin-top: 60px;
  height: 20px;
  display: flex;
  align-items: center;
`;

const CardProductStyled = {
  Wrapper,
  HeadBand,
  Body,
  Photo,
  Info,
  ButtonDetail,
};

export default CardProductStyled;
