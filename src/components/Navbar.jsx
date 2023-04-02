import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
	const [showMenu, setShowMenu] = useState(false);

	const handleToggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<nav className="navbar">
			<div className="navbar-logo">You are Perfect</div>
			<ul className={showMenu ? "navbar-nav show" : "navbar-nav"}>
				<li className="nav-item">
					<a href="#">Home</a>
				</li>
				<li className="nav-item">
					<a href="#">About</a>
				</li>
				<li className="nav-item">
					<a href="#">Services</a>
				</li>
				<li className="nav-item">
					<a href="#">Contact</a>
				</li>
			</ul>
			<div className="navbar-toggle" onClick={handleToggleMenu}>
				<i className="fa fa-bars"></i>
			</div>
		</nav>
	);
}

export default Navbar;
