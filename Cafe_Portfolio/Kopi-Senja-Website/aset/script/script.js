// ================= HUMBERGER MENU =================
const navList = document.querySelector('.nav__list')
// Ketika Humberger di Klik
document.querySelector('#humberger-menu').onclick = () => {
	navList.classList.toggle('active')
}

// Klik di Luar Sidebar Untuk Menutup
const humberger = document.querySelector('#humberger-menu')

document.addEventListener('click', function (e) {
	if (!humberger.contains(e.target) && !navList.contains(e.target)) {
		navList.classList.remove('active')
	}
})

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/
// Duplicate Image to Make the Animation Work
const tracks = document.querySelectorAll('.testimonials__content')

tracks.forEach(track => {
	const cards = [...track.children] //Spread to Make a Static Copy

	//Duplicate Cards Only Once
	for (const card of cards) {
		track.appendChild(card.cloneNode(true))
	}
})

/*=============== FORM RESERVASI & CONTACT ===============*/
const flipCard = document.querySelector('.flip-card')
const hubungiBtn = document.getElementById('hubungi-btn')
const reservasiBtn = document.getElementById('reservasi-btn')

hubungiBtn.addEventListener('click', () => {
	flipCard.classList.add('flipped')
})

reservasiBtn.addEventListener('click', () => {
	flipCard.classList.remove('flipped')
})
/*=============== CURRENT YEAR OF THE FOOTER ===============*/
const textYear = document.getElementById('footer-year'),
	currentYear = new Date().getFullYear()

// Each year it is updated to the current year
textYear.textContent = currentYear
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2000,
	delay: 300
})

// Hero
sr.reveal('.hero__section', { origin: 'top' })
sr.reveal('.hero__content', { delay: 900, origin: 'bottom' })
sr.reveal('.hero-btn', { delay: 1200, origin: 'bottom' })

// About
sr.reveal('.about__content', { origin: 'left' })
sr.reveal('.about__image', { origin: 'right' })

// Menu
sr.reveal('.menu__title, .menu__description', { origin: 'top' })
sr.reveal('.menu__card', { interval: 150 })

// Gallery
sr.reveal('.gallery__text', { origin: 'left' })
sr.reveal('.gallery__cards', { origin: 'right' })

// Testimonials
sr.reveal('.menu__title', { origin: 'top' })
sr.reveal('.gallery-title', { origin: 'top' })
sr.reveal('.location__title', { origin: 'top' })

// Contact
sr.reveal('.contact__section', { origin: 'bottom' })

// Location
sr.reveal('.location__title', { origin: 'top' })
sr.reveal('.map-embed', { origin: 'left' })
sr.reveal('.map__content', { origin: 'right' })

// Footer
sr.reveal('.footer__container', { origin: 'bottom' })
