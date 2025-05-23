import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
    </ul>
  </nav>
);

export default Navigation;
