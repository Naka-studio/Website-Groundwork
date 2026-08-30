// import modules
import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Import Elemernt
import Logo from "assets/logo/logo.svg";

// Main Function
function Navbar() {
	// Accordion Logic
	const [activeDropdown, setActiveDropdown] = useState(null);
	const toggleDropdown = (name) => {
		setActiveDropdown((prev) => (prev === name ? null : name));
	};

	// Humberger Logic
	const [menuOpen, setMenuOpen] = useState(false);

	// Klik Diluar biar Menutup navbar
	const menuRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setMenuOpen(false);
				setActiveDropdown(null);
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	// Main Html
	return (
		<header className="navbar__container">
			<nav ref={menuRef} className="navbar container">
				<Link to="/" className="navbar__brand">
					<img className="navbar__brand-logo" src={Logo} alt="Logo" />
					<h1 className="navbar__brand-text">Naka Studio</h1>
				</Link>

				<div
					id="nav-menu"
					className={`nav__menu ${menuOpen ? "active" : ""}`}
					onClick={(e) => e.stopPropagation()}
				>
					<ul className="nav__links">
						<li>
							<Link to="/about" className="nav__link">
								About Me
							</Link>
						</li>

						<li>
							<a href="#" className="nav__link">
								Contact
							</a>
						</li>

						<li>
							<a href="#" className="nav__link">
								Offers
							</a>
						</li>
					</ul>
				</div>

				{/* HUMBERGER MENU */}
				<div
					className="nav__toggle"
					id="nav-toggle"
					onClick={(e) => {
						e.stopPropagation();
						setMenuOpen(!menuOpen);
					}}
				>
					<i className="ri-menu-fill"></i>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
