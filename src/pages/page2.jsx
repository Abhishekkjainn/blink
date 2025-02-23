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
          setEmail(email);
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
    <div className="page2">
      <div className="analysis">
        <div className="analysiscard">
          <div className="analhead">Total URL's Created</div>
          <div className="analvalue">
            <div className="val">15</div>
            <img src="/add.png" alt="" className="valicon" />
          </div>
        </div>
        <div className="analysiscard">
          <div className="analhead">Total Clicks</div>
          <div className="analvalue">
            <div className="val">250</div>
            <img src="/click.png" alt="" className="valicon" />
          </div>
        </div>
        <div className="analysiscard">
          <div className="analhead">Avg Clicks per URL</div>
          <div className="analvalue">
            <div className="val">15</div>
            <img src="/average.png" alt="" className="valicon" />
          </div>
        </div>
      </div>
    </div>
  );
}
