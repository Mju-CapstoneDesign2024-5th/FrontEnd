import './App.css';
import "../src/styles/GlobalStyle";
import { ThemeProvider } from "./styles/ThemeProvider";
import SettingPage from './pages/SettingPage';

function App() {
  return (
    <ThemeProvider>
      <SettingPage/>
    </ThemeProvider>
  );
}

export default App;
