import { fetchData } from './getData.js'
import { carouselNavButtonsEventListeners } from './script.js'

function generateCarouselPhotos(item, index) {
	const prevButton = document.getElementById('left-btn')
	const elementClass =
		index === 0
			? 'carousel__image carousel__image--active fade'
			: 'carousel__image fade'

	const carouselItemHtml = `
  <div class="${elementClass}">
  <p class="hero-text">${item.title}</p>
  <img
    src=${item.url}
    alt="Main image"
    class="hero-image"
  />
  <a class="hero-link" href="#"></a>
</div>
`

	prevButton.insertAdjacentHTML('afterend', carouselItemHtml)
}

function generateCarouselNavButtons(item) {
	const carouselNavButtonsContainer = document.getElementById('carouselNav')
	const elementClass =
		item.id === 0
			? 'carousel__indicator carousel__indicator--active'
			: 'carousel__indicator'

	const carouselNavButtons = `
<button class="${elementClass}" id=${item.id}></button>
`

	carouselNavButtonsContainer.insertAdjacentHTML(
		'beforeend',
		carouselNavButtons
	)
}

export async function createCarousel() {
	try {
		const response = await fetchData('carousel')

		const data = await response.json()

		data.forEach((item, index) => {
			generateCarouselPhotos(item, index)
			generateCarouselNavButtons(item, index)
		})
		carouselNavButtonsEventListeners()
	} catch (ex) {
		alert(ex)
	}
}
