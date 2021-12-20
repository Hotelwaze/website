import styled from 'styled-components';

const Alert = styled.div.attrs(props => ({
    className: props.className
}))`
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  
  &.success {
    background: ${(props) => props.theme.successColorLighter};
    border: 1px solid ${(props) => props.theme.successColorLight};
    color: ${(props) => props.theme.successColor};
  }

  &.danger {
    background: ${(props) => props.theme.dangerColorLighter};
    border: 1px solid ${(props) => props.theme.dangerColorLight};
    color: ${(props) => props.theme.dangerColor};
  }
`;

export default Alert;
