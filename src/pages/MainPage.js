import React from "react"
import { Switch, Route, MemoryRouter } from 'react-router';

import {
  Demo,
  Demo2
} from "./"

import {
  FlexContainer,
  Sidebar,
  InnerContainer,
  TopBar
} from "../darkUi"

class MainPage extends React.Component{
  render() {
    return (
      <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
        <FlexContainer>
          <TopBar />
          <Sidebar />
          <InnerContainer>
              <Switch>
                <Route exact path="/" component={Demo} />
                <Route exact path="/Due" component={Demo2} />
              </Switch>
          </InnerContainer>
        </FlexContainer>
      </MemoryRouter>
    )
  }
}

export default MainPage