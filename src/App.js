import './App.css';
import "../src/styles/GlobalStyle";
import { ThemeProvider } from "./styles/ThemeProvider";
import SpecificPage from './pages/SpecificPage';
import SettingPage from "./pages/SettingPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/setting" element={<SettingPage/>}/>
          <Route path="/specific" element={<SpecificPage/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
