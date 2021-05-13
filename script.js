import { createCarousel } from './generateCarousel.js'
import { fetchAndRenderShopItems } from './generateShopItems.js'

export const ui = {
	// remake this to fucntion so it could be initialized?
	buttonNext: document.getElementById('right-btn'),
	buttonPrevious: document.getElementById('left-btn'),
	carouselNavButtons: document.getElementById('carouselNav'),
	shopList: document.getElementById('shopList'),
	containerFroCarouselImages: document.getElementById('carousel-images'),
	carouselImageContainer: document.getElementsByClassName('carousel__image'),
	carouselIndicatorButtons: document.getElementsByClassName(
		'carousel__indicator'
	),
	get navButtons() {
		return document.getElementsByClassName('carousel__indicator')
	},
}

window.addEventListener('load', (event) => {
	createCarousel()
	fetchAndRenderShopItems()
})

let currentImage = 1

function removeActiveNavButtonClass() {
	Array.from(ui.carouselIndicatorButtons).forEach((button) => {
		button.classList.remove('carousel__indicator--active')
	})
}

function removeActiveImageClass() {
	Array.from(ui.carouselImageContainer).forEach((image) => {
		image.classList.remove('carousel__image--active')
	})
}

function addActiveImageClass(item) {
	item.classList.add('carousel__image--active')
}

function addActiveNavButtonClass(index) {
	removeActiveNavButtonClass()
	document.getElementById(index).classList.add('carousel__indicator--active')
}

// EVENT LISTENERS

ui.buttonPrevious.addEventListener('click', () => {
	removeActiveImageClass()

	const isFirst = currentImage - 1 < 0

	if (isFirst) {
		let lastCarouselImage =
			document.querySelectorAll('.carousel__image').length

		// -1 is used because ui.carouselImageContainer starts at 0 not 1
		addActiveImageClass(ui.carouselImageContainer[lastCarouselImage - 1])

		currentImage = lastCarouselImage

		addActiveNavButtonClass(currentImage)
		currentImage--
	} else {
		// -1 is used because ui.carouselImageContainer starts at 0 not 1
		addActiveImageClass(ui.carouselImageContainer[currentImage - 1])

		addActiveNavButtonClass(currentImage)
		currentImage--
	}
})

ui.buttonNext.addEventListener('click', () => {
	removeActiveImageClass()
	const isLast = currentImage + 1 > ui.carouselImageContainer.length

	if (isLast) {
		addActiveImageClass(ui.carouselImageContainer[0])

		currentImage = 1
		addActiveNavButtonClass(currentImage)
	} else {
		addActiveImageClass(ui.carouselImageContainer[currentImage])

		currentImage++
		addActiveNavButtonClass(currentImage)
	}
})
