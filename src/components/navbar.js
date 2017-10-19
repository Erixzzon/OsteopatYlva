import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Hem</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
