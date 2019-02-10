import styled from "styled-components"

const CommonButton = styled.div`
  background-color: #5692F0;
  color: #fff;
  padding: 8px 35px;
  border-radius: 6px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  width: auto;
  float: left;
  clear: both;
  transition:0.3s cubic-bezier(0.37, 1.52, 0.5, 0.89);
  &:hover {
    padding: 8px 45px;
    transition:0.3s cubic-bezier(0.37, 1.52, 0.5, 0.89);
  }
`;

export default CommonButton