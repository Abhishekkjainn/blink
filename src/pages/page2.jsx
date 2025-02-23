import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';

export default function Page2() {
  const navigate = useNavigate();
  const [urls, setUrls] = useState([]);
  const [hasEmail, setHasEmail] = useState(true);
  const [email, setEmail] = useState('');
  const [totalClicks, setTotalClicks] = useState(0);
  const [averageClicks, setAverageClicks] = useState(0);
  const [selectedQR, setSelectedQR] = useState(null); // Store the selected QR URL

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

          const total = data.urls.reduce(
            (sum, url) => sum + (url.clickCount || 0),
            0
          );
          setTotalClicks(total);

          setAverageClicks(
            data.urls.length ? (total / data.urls.length).toFixed(2) : 0
          );
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

  const switchUser = () => {
    localStorage.removeItem('email');
    setHasEmail(false);
    navigate('/dashboard');
  };

  return (
    <div className="page2">
      {!hasEmail ? (
        <div className="card">
          <h2 className="notfoundhead">Enter your Email</h2>
          <div className="form">
            <label className="label">
              <div className="shortcut">
                <img src="/average.png" alt="" className="shortcutimg" />
              </div>
              <input
                type="text"
                className="search_bar"
                placeholder="Enter Your Email.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <div className="submitbtn" onClick={handleSubmit}>
              Submit
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="username">Showing Results for - {email}</div>
          <div className="analysis">
            <div className="analysiscard">
              <div className="analhead">Total URL's Created</div>
              <div className="analvalue">
                <div className="val">{urls.length}</div>
                <img src="/add.png" alt="Add Icon" className="valicon" />
              </div>
            </div>
            <div className="analysiscard">
              <div className="analhead">Total Clicks</div>
              <div className="analvalue">
                <div className="val">{totalClicks}</div>
                <img src="/click.png" alt="Click Icon" className="valicon" />
              </div>
            </div>
            <div className="analysiscard">
              <div className="analhead">Avg Clicks per URL</div>
              <div className="analvalue">
                <div className="val">{averageClicks}</div>
                <img
                  src="/average.png"
                  alt="Average Icon"
                  className="valicon"
                />
              </div>
            </div>
          </div>
          <div className="list">
            {urls.length > 0 ? (
              urls.map((url, index) => (
                <div className="item" key={index}>
                  <div className="sno">{index + 1}.</div>

                  <a
                    href={url.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linklist"
                  >
                    {url.url}
                  </a>

                  <a
                    href={`https://belinkk.vercel.app/${url.shortCode}`}
                    className="shortcode"
                  >
                    {url.shortCode}
                  </a>
                  <div className="count">{url.clickCount || 0} Visits</div>
                  <img
                    src="scanner.png"
                    alt="QR Scanner"
                    className="qrlink"
                    onClick={() =>
                      setSelectedQR(
                        `https://belinkk.vercel.app/${url.shortCode}`
                      )
                    }
                  />
                </div>
              ))
            ) : (
              <p className="none">No URLs found.</p>
            )}
            <div className="switchuser">
              <div className="switchuserbutton" onClick={switchUser}>
                <img src="/user.png" alt="switch user" className="switchicon" />
                <div className="switchtag">Switch User</div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* QR Code Popup */}
      {selectedQR && (
        <div className="qr-modal">
          <div className="qr-content">
            <h2>QR Code</h2>
            <QRCodeCanvas value={selectedQR} size={200} />
            <button onClick={() => setSelectedQR(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
