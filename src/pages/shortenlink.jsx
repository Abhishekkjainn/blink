import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function ShortenLink() {
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [shortcutImg, setShortcutImg] = useState('/question.png');
  const [loading, setLoading] = useState(false); // State for loader

  const navigate = useNavigate(); // Hook for redirection

  // Function to validate URL format
  const validateUrl = (inputUrl) => {
    const urlPattern =
      /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/;
    return urlPattern.test(inputUrl);
  };

  // Function to validate email format
  const validateEmail = (inputEmail) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(inputEmail);
  };

  // Handle URL input change
  const handleUrlChange = (e) => {
    const inputUrl = e.target.value;
    setUrl(inputUrl);

    if (validateUrl(inputUrl)) {
      setIsValidUrl(true);
      setShortcutImg('/correct.png'); // Change icon when URL is valid
    } else {
      setIsValidUrl(false);
      setShortcutImg('/question.png'); // Reset icon if URL is invalid
    }
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle submit button click
  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      alert('Please enter a valid email.');
      return;
    }
    localStorage.setItem('email', email);
    setLoading(true); // Start loader
    try {
      const response = await fetch('https://blinkapi.vercel.app/add/addurl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(
          `Shorter Link Generated at https://belinkk.vercel.app/${data.shortCode}`
        );
        setShowModal(false);
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        alert(`Error: ${data.message || 'Something went wrong!'}`);
      }
    } catch (error) {
      alert('Failed to connect to the server. Please try again.');
      console.error('API Error:', error);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div className="shortenlink">
      <div className="side1">
        <div className="shorthead">
          Turn Long URLs into <span className="purple">Smart</span> Links.
          <div className="features">
            <div className="feature">
              <img src="/link.png" alt="" className="featureicon" />
              <div className="featuretag">Shorter Links</div>
            </div>
            <div className="feature">
              <img src="/smart.png" alt="" className="featureicon" />
              <div className="featuretag">Smarter Links</div>
            </div>
            <div className="feature">
              <img src="/scan.png" alt="" className="featureicon" />
              <div className="featuretag">Get QR Code</div>
            </div>
            <div className="feature">
              <img src="/activity.png" alt="" className="featureicon" />
              <div className="featuretag">Link Analytics</div>
            </div>
          </div>
        </div>
      </div>
      <div className="side2">
        <label className="label">
          <div className="shortcut">
            <img src={shortcutImg} alt="" className="shortcutimg" />
          </div>
          <input
            type="text"
            className="search_bar"
            placeholder="Enter Your Link.."
            value={url}
            onChange={handleUrlChange}
          />
        </label>

        <div
          className="convertbutton"
          onClick={() => isValidUrl && setShowModal(true)}
        >
          <img src="/convert.png" alt="convert" className="convert" /> Shorten
          the Link
        </div>
      </div>

      {/* Modal */}
      <div
        className={`modal-overlay ${showModal ? 'show' : ''}`}
        onClick={() => setShowModal(false)}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>Enter Your Email</h2>
          <input
            type="email"
            placeholder="Enter your email..."
            className="modal-input"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="modal-actions">
            <button onClick={() => setShowModal(false)}>Cancel</button>
            <button onClick={handleSubmit} disabled={loading}>
              {loading ? (
                <div className="loader"></div> // Show loader when submitting
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
