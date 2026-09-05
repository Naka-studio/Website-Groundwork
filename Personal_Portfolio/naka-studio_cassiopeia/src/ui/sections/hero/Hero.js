import Images from "assets/images/imageServce";

import "./Hero.scss";

function HeroSec() {
	return (
		<div className="hero container grid">
			<div className="hero__shadow"></div>
			<span className="hero-label">Cassiopeia</span>

			<div className="hero__data">
				<h3 className="hero__data-greeting">Hi, I'm</h3>
				<h1 className="hero__data-name">John</h1>
			</div>

			<div className="hero__image">
				<div className="bubble-animate"></div>
				<Images type="profile" className="hero__image-perfil" />
			</div>

			<div className="hero__info">
				<h3 className="hero__info-split">Passions</h3>
				<h1 className="hero__info-1">Developer</h1>
				<h1 className="hero__info-2">& Designer</h1>
			</div>

			<div className="hero__social">
				<a
					href="https://www.linkedin.com/"
					target="_blank"
					className="hero__social-link"
				>
					<i className="ri-linkedin-box-line"></i>
				</a>

				<a href="https://github.com/" target="_blank" className="hero__social-link">
					<i className="ri-github-line"></i>
				</a>

				<a
					href="https://instagram.com/"
					target="_blank"
					className="hero__social-link"
				>
					<i className="ri-instagram-line"></i>
				</a>

				<a
					href="https://about.gitlab.com/"
					target="_blank"
					className="hero__social-link"
				>
					<i className="ri-gitlab-line"></i>
				</a>
			</div>
			<a
				href="#"
				download
				target="_blank"
				className="hero__cv"
			>
				RESUME <i className="ri-file-list-2-line"></i>
			</a>
		</div>
	);
}

export default HeroSec;
