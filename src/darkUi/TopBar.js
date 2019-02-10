import styled from "styled-components"

const TopBar = styled.div`
  height:40px;
  width:100vw;
  background-color:${({theme}) => theme.darkTheme.topbarColor};
  border-bottom: 1px solid #191E21;
  flex: 1 0 100vw;
  z-index: 9999;
  -webkit-app-region: drag;
`;

export default TopBar