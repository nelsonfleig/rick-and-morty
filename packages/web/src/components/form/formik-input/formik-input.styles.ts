import styled from 'styled-components';

export const FormInputField = styled.input<{ error: boolean }>`
  border: ${(props) => (props.error ? '1px solid red' : '1px solid #ccc')};
  padding: 10px;
  border-radius: ${(props) => props.theme.styles.borderRadius};
  width: 100%;
  font-size: 16px;
`;
