import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md  px-4 py-1 box-shadow" style={{background:'transparent'}}>
      <div className="container-fluid">
        <a className="navbar-brand " href="#">Logo</a>
        <button
          className="navbar-toggler nn "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-md-4 text-center">
            <li className="nav-item">
              <a className="nav-link " href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Project</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Contact</a>
            </li>
          </ul>

          
          <div className="d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
            <button className="btn btn-outline-light rounded-pill px-4 nn">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
