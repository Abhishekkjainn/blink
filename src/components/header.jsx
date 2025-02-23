import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className="header">
      <Link to={'/'} className="company">
        <img src="./mainlogo.png" alt="Main logo" className="companylogo" />
        <div className="logotag">
          <div className="logoname">Blink</div>
        </div>
      </Link>
      <div className="links">
        <Link to={'/dashboard'} className="link">
          Dashboard
        </Link>
        <a
          href="https://github.com/Abhishekkjainn/blink/blob/main/README.md"
          className="link"
        >
          Documentation
        </a>
        <a href="mailto:jainabhishek1904@gmail.com" className="link">
          Contact
        </a>
        <a href="https://abhishekjain.vercel.app/contact" className="link">
          Reviews
        </a>
        <a href="https://abhishekjain.vercel.app" className="link">
          Developer
        </a>
      </div>
      <div className="action">
        <Link to={'/shorten-link'} className="addbutton">
          <img src="./add.png" alt="add icon" className="addicon" /> Add Link
        </Link>
        {/* <div className="addbutton">
          <img src="./scanner.png" alt="add icon" className="addicon" />{' '}
          Generate QR
        </div> */}
      </div>
    </div>
  );
}
