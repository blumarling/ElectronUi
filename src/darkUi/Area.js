import styled from "styled-components"

const Area = styled.div`
  width:100%;
  padding:8px;
  height:auto;
  flex-shrink: ${props => props.shrink ? props.shrink : '1'};
  p {
    color: #e4e4e4;
    font-weight: 400;
    font-size: 14px;
    margin-bottom:14px;
  }
`;

export default Area