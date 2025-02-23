import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import ShortenLink from './pages/shortenlink';
import RedirectPage from './pages/redirectedpage';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  // Hide header when visiting a shortened URL like /:id
  const isRedirectPage = /^\/[^/]+$/.test(location.pathname);

  return (
    <>
      {!isRedirectPage && <Header />}
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/dashboard" element={<Page2 />} />
        <Route path="/shorten-link" element={<ShortenLink />} />
        <Route path="/:id" element={<RedirectPage />} />
      </Routes>
    </>
  );
}

export default App;
