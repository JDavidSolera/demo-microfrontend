import { ulMixin } from "@phoenix/design-system";
import styled from "styled-components";
import { layout, space } from "styled-system";

const ContentAbsolute = styled.div<{ active: boolean }>`
  position: absolute;
  z-index: 1000;
  top: ${({ active }) => (active ? 0 : "100vh")};
  left: 0;
  right: 0;
  bottom: 0;
  background: #f1f1f1;
  transition: ${({ theme }) => theme.transitions.linear};
`;

const Content = styled.div`
  ${layout}
  ${space}
`;

const Head = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  ${ulMixin}
`;

const Item = styled.li`
  color: ${({ theme }) => theme.colors["gray-4"]};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 14px;
  padding: 12px 0;
  border-top: 1px solid ${({ theme }) => theme.colors["gray-2"]};
`;

const ItemIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
`;

const SliderContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
  width: 100%;
  aspect-ratio: 1;
`;

const SliderMain = styled.div`
  height: 100%;
  .swiper {
    height: 100%;
  }
`;

const SliderThumb = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 100%;

  .swiper {
    height: 100%;
  }
`;

const SlideTumb = styled.div``;

const Photo = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

const DetailProductStyled = {
  Content,
  Head,
  List,
  Item,
  ItemIcon,
  SliderContainer,
  SliderMain,
  SliderThumb,
  SlideTumb,
  Photo,
  ContentAbsolute,
};

export default DetailProductStyled;
