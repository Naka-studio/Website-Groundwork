import { useState, useRef, useEffect } from "react";
import "./Navbar.scss";

function Navbar() {
	// Humberger Logic
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setMenuOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<header className="header" id="header">
			<nav ref={menuRef} className="navbar navbar__container">
				{/* Brand / Logo */}
				<div className="navbar__brand">
					<h1 className="navbar__brand-logo">Naka Studio</h1>
				</div>

				{/* Navbar Menu*/}
				<div
					id="navbar-menu"
					className={`navbar__menu ${menuOpen ? "active" : ""}`}
					onClick={(e) => e.stopPropagation()}
				>
					<ul className="navbar__menu-links" onClick={() => setMenuOpen(false)}>
						<li className="navbar__menu-link">About Me</li>
						<li className="navbar__menu-link">Project</li>
						<li className="navbar__menu-link">Contact</li>
					</ul>
				</div>

				{/* Humberger Menu */}
				<div
					className="navbar__toggle"
					id="nav-toggle"
					onClick={(e) => {
						e.stopPropagation();
						setMenuOpen(!menuOpen);
					}}
				>
					<i className="codicon codicon-menu"></i>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
