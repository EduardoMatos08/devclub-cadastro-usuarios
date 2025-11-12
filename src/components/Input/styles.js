import styled from 'styled-components';

export const InputStyle = styled.input`
  transition: box-shadow 0.2s ease-in-out;
  border-radius: 10px;
  padding: 0 10px;
  border: none;
  width: 100%;
  height: 45px;
  color: #282828ff;
  font-size: 1rem;
  &:active,
  &:focus {
    outline: none;
  }
  &[type=number]::-webkit-outer-spin-button,
  &[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default InputStyle;