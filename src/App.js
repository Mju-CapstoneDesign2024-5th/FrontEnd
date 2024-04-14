import './App.css';
import "../src/styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import styled, { ThemeProvider } from 'styled-components';
import Statusbar from './components/Statusbar';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <PageArea>
        <Searchbar/>
      </PageArea>
    </ThemeProvider>
  );
}

const PageArea = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: black;
`

export default App;
