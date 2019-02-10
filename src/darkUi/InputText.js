import styled from "styled-components"
import React from "react"

const InputStyled = styled.input`
  border: 0;
  background-color: #3C4154;
  padding: 9px 14px;
  border-radius: 6px;
  outline: none;
  color: #ffffff;
  font-size: 14px;
  flex:1;
`;

const InputContainer = styled.div`
  flex: 1 0 100%;
  display:flex;
`;

const InputText = () => {
  return (
    <InputContainer>
      <InputStyled />
    </InputContainer>
    
  )
}

export default InputText