import styled from '@emotion/styled';

export const SubTitle = styled.h2`
  font-size: 18px;
  line-height: 1.16;
  font-weight: 500;

  margin-bottom: 30px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #c1c1c1;
  }
`;
