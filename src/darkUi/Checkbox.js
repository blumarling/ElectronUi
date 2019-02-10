import styled, {css} from "styled-components"
import React, { useState }from "react"

const Checkbox = styled.div`
  width: 14px;
  height: 14px;
  border: 1px solid #88888E;
  border-radius: 2px;
  float: left;
  margin-right: 8px;
  margin-top:2px;
  transition:0.3s cubic-bezier(0.37, 1.52, 0.5, 0.89);
  ${props => props.active && css`
    background-color:#e2af1f;
    transition:0.3s cubic-bezier(0.37, 1.52, 0.5, 0.89);
    border: 1px solid #e2af1f;
  `}
`;
const CheckboxContainer = styled.div`
  display:block;
  margin:8px 0px;
`;

export default (props) => {
  const [active, setActive] = useState(false);
  return (
    <CheckboxContainer>
      <Checkbox onClick={() => setActive(!active)} active={active}/> {props.children}
    </CheckboxContainer>
  )
}