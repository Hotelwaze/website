import styled from 'styled-components';

const ControlTextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.5625rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.theme.bodyColor};
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid ${(props) => props.theme.borderColor};
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  resize: vertical;
  
  &:focus {
    color: ${(props) => props.theme.bodyColor};
    background-color: #ffffff;
    border-color: ${(props) => props.theme.primaryColor};
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
  
  &:disabled {
    background-color: #e9ecef;
    opacity: 1;
  }
`;

export default ControlTextArea;
