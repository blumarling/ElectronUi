import styled, {css} from "styled-components"
import React from "react"
import {withRouter} from 'react-router-dom';

const Li = styled.li`
  color: #A6A7AB;
  padding: 10px 21px;
  font-weight: 400;
  margin: 0 0;
  font-size: 15px;
  ${(props) => props.active && css`
    border-left:3px solid #fbbd0d;
    color: #fff;
  `}
`;

const Sidebar = styled.div`
  height:100%;
  width:23%;
  @media (min-width:1000px) {
    width:18%;
  }
  @media (min-width:1200px) {
    width:15%;
  }
  @media (min-width:1600px) {
    width:12%;
  }
  background-color: ${({theme}) => theme.darkTheme.sidebarColor};
  border-right: 1px solid #191E21;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const SidebarEnhanced = (props) => {
  const {location, history} = props

  return (<Sidebar>
          <ul>
            <Li active={location.pathname === '/'} onClick={() => history.push('/')}>Demo Uno</Li>
            <Li active={location.pathname === '/Due'} onClick={() => history.push('/Due')}>Demo Due</Li>
          </ul>
        </Sidebar>)
}

export default withRouter(SidebarEnhanced)