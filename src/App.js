import './App.css';
import "../src/styles/GlobalStyle";
import { ThemeProvider } from "./styles/ThemeProvider";
import SpecificPage from './pages/SpecificPage';
import SettingPage from "./pages/SettingPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import BookmarkPage from './pages/BookmarkPage';
import NickNamePage from "./pages/NickNamePage";
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/bookmark" element={<BookmarkPage/>}/>
          <Route path="/setting" element={<SettingPage/>}/>
          <Route path="/specific/:id" element={<SpecificPage/>}/>
          <Route path="/search/:content" element={<SearchPage/>}/>
          <Route path="/nickname" element={<NickNamePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/join' element={<JoinPage/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
