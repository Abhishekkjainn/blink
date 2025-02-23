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

  // Extract the first path segment
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Hide header only when there's exactly one dynamic segment (i.e., a shortened URL)
  const isRedirectPage =
    pathSegments.length === 1 &&
    !['dashboard', 'shorten-link'].includes(pathSegments[0]);

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
