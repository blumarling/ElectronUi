import React, {Component} from 'react';
import { ThemeProvider } from "styled-components"
import { theme } from "./darkUi"
import {
  MainPage
} from "./pages"


export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    );
  }
}
