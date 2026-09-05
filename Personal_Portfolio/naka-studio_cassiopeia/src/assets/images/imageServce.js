import ProfileImg from './profile.webp';

import './style.scss';

function Images({ type, className }) {
	const data = {
		profile: {
			img: ProfileImg,
			alt: 'Naka Studio Profile',
		},
	};

	const imgList = data[type];

	return (
		<>
			<img
				className={`image__asset ${className || ""}`}
				src={imgList.img}
				alt={imgList.alt}
			/>
		</>
	);
};

export default Images