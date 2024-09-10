import {
	navButtons,
	navbarIcon,
	navbarMenu,
	portfolioContainer,
	technologiesContainers,
} from './selectors.js'

function isAnimate(element) {
	return !element.classList.contains('animate-pop-in')
}

const options = {
	root: null,
	rootMargin: '0px',
	threshold: [0.1, 1.0],
}

const observer = new IntersectionObserver((entries) => {
	if (entries[0].isIntersecting && isAnimate(entries[0].target))
		entries[0].target.classList.add('animate-pop-in')
}, options)

;[...portfolioContainer, ...technologiesContainers].forEach((element) =>
	observer.observe(element)
)

navbarIcon.addEventListener('click', () => {
	if (navbarMenu.classList.contains('inactive')) {
		navbarMenu.classList.remove('inactive')
	} else {
		navbarMenu.classList.add('inactive')
	}
})

navButtons.forEach((button) =>
	button.addEventListener('click', () => {
		navbarMenu.classList.add('inactive')
		navbarMenu.setAttribute('aria-hidden', true)
	})
)
