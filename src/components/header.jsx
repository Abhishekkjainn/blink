import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className="header">
      <div className="company">
        <img src="./mainlogo.png" alt="Main logo" className="companylogo" />
        <div className="logotag">
          <div className="logoname">Blink</div>
        </div>
      </div>
      <div className="links">
        <div className="link">Dashboard</div>
        <div className="link">Documentation</div>
        <div className="link">Contact</div>
        <div className="link">Reviews</div>
        <div className="link">Developer</div>
      </div>
      <div className="action">
        <div className="addbutton">
          <img src="./add.png" alt="add icon" className="addicon" /> Add Link
        </div>
        <div className="addbutton">
          <img src="./scanner.png" alt="add icon" className="addicon" />{' '}
          Generate QR
        </div>
      </div>
    </div>
  );
}
