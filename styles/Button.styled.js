import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 500;
  line-height: 1;
  color: ${props => props.theme.bodyColor};
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 12px;
  padding: 0.375rem 0.75rem;
  font-size: .75rem;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  //&:hover {
  //  color: $body-color;
  //  //text-decoration: if($link-hover-decoration == underline, none, null);
  //}
  //
  //.btn-check:focus + &,
  //&:focus {
  //  outline: 0;
  //  //box-shadow: $btn-focus-box-shadow;
  //}
  //
  //.btn-check:checked + &,
  //.btn-check:active + &,
  //&:active,
  //&.active {
  ////@include box-shadow($btn-active-box-shadow);
  //
  //  &:focus {
  //  //@include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);
  //  }
  //}
  //
  //&:disabled,
  //&.disabled {
  //  pointer-events: none;
  //  opacity: $btn-disabled-opacity;
  ////@include box-shadow(none);
  //}
`;

export default Button;
