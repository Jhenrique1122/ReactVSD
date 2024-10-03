import GlobalStyles from "./Styles/GlobalStyles"

import { ThemeProvider } from "styled-components"
import dark from "./Styles/themes/dark"
import { Dashboard } from "./Pages/Dashboard"



export function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Dashboard />
      </ThemeProvider>
    </>
  )
}