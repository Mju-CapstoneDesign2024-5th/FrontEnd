import './App.css';
import "../src/styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import { ThemeProvider } from 'styled-components';
import SettingPage from './pages/SettingPage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <SettingPage/>
    </ThemeProvider>
  );
}

export default App;
