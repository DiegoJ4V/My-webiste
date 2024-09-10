import englishTranslation from '../assets/i18n/en.json'
import spanishTranslation from '../assets/i18n/es.json'

/**
 * @param {string} key
 */
export function getTranslation(key) {
	if (globalThis.localStorage) {
		const locale = localStorage.getItem('language') ?? navigator.language

		if (locale.includes('es')) {
			return spanishTranslation[key]
		}
		return englishTranslation[key]
	}
	return englishTranslation[key]
}
