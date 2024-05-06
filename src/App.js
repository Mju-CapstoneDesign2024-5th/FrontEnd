import './App.css';
import "../src/styles/GlobalStyle";
import { ThemeProvider } from "./styles/ThemeProvider";
import SpecificPage from './pages/SpecificPage';
import SettingPage from "./pages/SettingPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import BookmarkPage from './pages/BookmarkPage';
import NickNamePage from "./pages/NickNamePage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/bookmark" element={<BookmarkPage/>}/>
          <Route path="/setting" element={<SettingPage/>}/>
          <Route path="/specific" element={<SpecificPage/>}/>
          <Route path="/nickname" element={<NickNamePage/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
