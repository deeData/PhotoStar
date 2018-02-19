﻿import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/photos">PhotoStar</Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Top Photos</Link></li>
                            <li><Link to="/photos/:userId">My Photos</Link></li>
                            <li><Link to="/photos/add">Add Photo</Link></li>

                        </ul>
                        <ul className="nav navbar-nav navbar-right">

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;