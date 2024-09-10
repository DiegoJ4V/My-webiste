import { getTranslation } from './getTranslation.js'
import {
	deskNav,
	headerParagraph,
	headerReply,
	mobNav,
	portfolioTitle,
	projectDesc,
	projectTechTitle,
	techTitle,
} from './selectors.js'

export function textByLanguage() {
	const nav = getTranslation('nav')

	deskNav[0].textContent = nav.presentation
	deskNav[1].textContent = nav.portfolio
	deskNav[2].textContent = nav.technologies

	mobNav[0].textContent = nav.presentation
	mobNav[1].textContent = nav.portfolio
	mobNav[2].textContent = nav.technologies

	const header = getTranslation('header')

	headerParagraph[1].textContent = header.from
	headerParagraph[2].textContent = header.to
	headerParagraph[3].textContent = header.about
	headerReply.textContent = header.email

	portfolioTitle.textContent = getTranslation('portfolioTitle')

	techTitle.textContent = getTranslation('technologies')
	textForPortfolio()
}

function textForPortfolio() {
	const portfolio = getTranslation('portfolio')

	for (let i = 0; i < portfolio.length; i++) {
		const portfolioElement = portfolio[i]

		projectDesc[i].textContent = portfolioElement.description

		projectTechTitle[i].textContent = portfolioElement.specTech
	}
}
