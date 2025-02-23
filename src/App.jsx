import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import ShortenLink from './pages/shortenlink';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/dashboard" element={<Page2 />} />
        <Route path="/shorten-link" element={<ShortenLink />} />
        <Route path="/shorten-link" element={<ShortenLink />} />
      </Routes>
    </Router>
  );
}

export default App;
