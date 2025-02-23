import { useEffect, useState } from 'react';

export default function Page2() {
  const [urls, setUrls] = useState([]);
  const [hasEmail, setHasEmail] = useState(true);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');

    if (!storedEmail) {
      setHasEmail(false);
      return;
    }

    fetchUrls(storedEmail);
  }, []);

  const fetchUrls = (email) => {
    fetch(`https://blinkapi.vercel.app/a=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUrls(data.urls);
          setHasEmail(true);
          localStorage.setItem('email', email);
        } else {
          setHasEmail(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching URLs:', error);
        setHasEmail(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      fetchUrls(email);
    }
  };

  return (
    <div className="page-container">
      {hasEmail ? (
        <div className="card">
          <h2 className="card-title">Your Saved URLs</h2>
          {urls.length > 0 ? (
            <ul className="url-list">
              {urls.map((url, index) => (
                <li key={index} className="url-item">
                  <a
                    href={url.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="url-link"
                  >
                    {url.url}{' '}
                    <span className="shortcode">({url.shortCode})</span>
                  </a>
                  <span className="click-count">Clicks: {url.clickCount}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-urls">No URLs found.</p>
          )}
        </div>
      ) : (
        <div className="card">
          <h2 className="card-title">Enter Your Email</h2>
          <form onSubmit={handleSubmit} className="email-form">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
              required
            />
            <button type="submit" className="submit-button">
              Fetch URLs
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
