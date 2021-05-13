import { fetchData } from './api/apiCalls.js'
import { ui } from './script.js'
import {
	generateCarouselNavButtons,
	carouselNavAddEvListeners,
} from './generateCarouselNav.js'

function generateCarouselPhotos(data) {
	const finalCarousel = data
		.map((item, index) => {
			return `
      <div class="carousel__image fade ${
			index === 0 ? 'carousel__image--active' : ''
		}">
      <p class="hero-text">${item.title}</p>
      <img
        src=${item.url}
        alt="Main image"
        class="hero-image"
      />
      <a class="hero-link" href="#"></a>
    </div>
    `
		})
		.join('')

	ui.containerFroCarouselImages.insertAdjacentHTML('afterend', finalCarousel)
}

export async function createCarousel() {
	try {
		const response = await fetchData('carousel')

		const data = await response.json()

		generateCarouselPhotos(data)
		generateCarouselNavButtons(data)
		carouselNavAddEvListeners()
	} catch (ex) {
		alert(ex)
	}
}
