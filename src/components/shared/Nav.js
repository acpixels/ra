import React    from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className="navbar-brand mr-auto">
        <img className="mr-2" src="/ra-logo.png" alt="Reason Analytics Logo" width="150" height="60" />
        <h3 className="text-white font-weight-light">Reason Analytics</h3>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>  
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav app-bar-icons">
          <li className="nav-item">View 1</li>
          <li className="nav-item">View 2</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
