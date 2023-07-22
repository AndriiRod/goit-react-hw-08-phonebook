import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const Label = styled.label`
  position: absolute;
  top: -6px;
  left: 15px;

  background-color: #ffffff;
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.018px;

  color: rgba(0, 0, 0, 0.6);
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 16px 14px;

  background-color: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.38);
  border-radius: 8px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.18;

  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: #3f9bfc;
  }
`;

export const FormBtn = styled.button`
  font-family: inherit;
  font-size: 14px;
  line-height: normal;
  font-weight: 400;

  padding: 9px 44px;
  background-color: #3f9bfc;
  color: #ffffff;
  border: none;

  border-radius: 10px;
`;

export const ErrorMessage = styled.div`
  font-size: 12px;
  padding: 10px;
  border: 1px solid #dc143c;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #f08080;
  color: #e0ffff;
`;

export const InputWrap = styled.div`
  position: relative;
`;
