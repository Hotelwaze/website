import styled from 'styled-components';

const FormGroup = styled.div`
  margin-bottom: .75rem;
  position: relative;
  
  &.select {
    &::after {
      bottom: 14px;
      content: url('./assets/images/caret-down.svg');
      pointer-events: none;
      position: absolute;
      right: 12px;
    }
  }
  
  &.is-invalid~invalid-feedback {
    display: block;
  }
`;

export default FormGroup;
