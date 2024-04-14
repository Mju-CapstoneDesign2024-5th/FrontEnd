import './App.css';
import "../src/styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import styled, { ThemeProvider } from 'styled-components';
import Statusbar from './components/Statusbar';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <PageArea>
      </PageArea>
    </ThemeProvider>
  );
}

const PageArea = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
`

export default App;
