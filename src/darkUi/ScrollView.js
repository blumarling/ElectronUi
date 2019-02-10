import styled from "styled-components"

const ScollView = styled.div`
  display: flex;
  flex:1;
  padding:20px;
  height:calc(100% - 40px);
  align-items:flex-start;
  flex-wrap:wrap;
  align-content:baseline;
  overflow-y:scroll;
  
    ::-webkit-scrollbar {
      width: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #3C4154!important;
      border-radius: 20px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 20px;
    }
`;

export default ScollView