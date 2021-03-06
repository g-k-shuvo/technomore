import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body{
  font-family: ${props => props.theme.fonts.main};
  background-color: ${props => props.theme.colors.light1};
}
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
