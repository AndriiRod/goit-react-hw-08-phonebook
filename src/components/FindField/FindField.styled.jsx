import styled from '@emotion/styled';
import { FiSearch } from 'react-icons/fi';

export const Label = styled.label`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;

  margin-bottom: 5px;
  border-bottom: 1px solid #eaecf0;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;

  color: #000000;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 15px 0;
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #667085;

  &::placeholder {
    color: #c0c0c0;
  }
  &:focus {
    outline: none;
  }
`;

export const Icon = styled(FiSearch)`
  width: 20px;
  height: 20px;
  color: #667085;
`;
