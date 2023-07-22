import styled from '@emotion/styled';
import { MdDeleteForever } from 'react-icons/md';

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid rgba(208, 213, 221, 0.3);
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  font-size: 14px;

  font-weight: 500;
  line-height: 1.43;

  color: #101828;
`;

export const Number = styled.p`
  font-size: 14px;

  font-weight: 400;
  line-height: 1.43;

  color: #667085;
`;

export const DeleteBtn = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;
  color: #667085;

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #f08080;
  }
`;

export const Icon = styled(MdDeleteForever)`
  width: 20px;
  height: 20px;
  color: inherit;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;
