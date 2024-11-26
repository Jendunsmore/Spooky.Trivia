import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-lg py-3">
            <div className="container">
                <Link className="navbar-brand text-warning" to="/">
                    🎃 Spooky Trivia
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link
                                className="nav-link text-warning"
                                to="/"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-warning"
                                to="/game"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                            >
                                Play Game
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-warning"
                                to="/user-management"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                            >
                                Manage Users
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
