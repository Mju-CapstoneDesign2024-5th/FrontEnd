import './App.css';
import "../src/styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import { ThemeProvider } from 'styled-components';
import SettingPage from './pages/SettingPage';
import NickNamePage from './pages/NickNamePage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <NickNamePage/>
    </ThemeProvider>
  );
}

export default App;
