import styled from 'styled-components';

export const FormTag = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 300px;
  height: 20px;
  border: 1px solid #f21d6a;
`;

export const Button = styled.button`
  display: block;
  width: 100px;
  height: 25px;
  margin-top: 15px;
  background-color: #fff;
  border: 0px;
  border-radius: 5px;
  transition: all 200ms cubic-bezier(0.15, 0.52, 0.6, 0.69);
  background-color: #e7dae8;
  box-shadow: 0px 0px 1px 1px rgba(184, 164, 184, 1);

  &:hover,
  :focus {
    background-color: #f21d6a;
    box-shadow: 3px 3px 10px -1px rgba(219, 213, 213, 0.75);
  }
`;
