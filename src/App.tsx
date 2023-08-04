import { ThemeProvider } from 'styled-components'
import { Button } from "./components/Button";
import { defaultTheme } from './styles/themes/default';
import { darkTheme } from './styles/themes/dark';
import { useState } from 'react';

export function App() {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme)=> prevTheme === defaultTheme ? darkTheme : defaultTheme);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={toggleTheme} variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="success"/>
      <Button variant="danger"/>
      <Button />
    </ThemeProvider>
  )
}
