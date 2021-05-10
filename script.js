import { createCarousel } from './generateCarousel.js'
import { createShopItemList } from './generateShopItems.js'

const ui = {
	buttonNext: document.getElementById('right-btn'),
	buttonPrevious: document.getElementById('left-btn'),
	carouselNavButtons: document.getElementById('carouselNav'),
	shopList: document.getElementById('shopList'),
	carouselImageContainer: document.getElementsByClassName('carousel__image'),
	carouselIndicatorButtons: document.getElementsByClassName(
		'carousel__indicator'
	),
}

window.addEventListener('load', (event) => {
	createCarousel()
	createShopItemList()
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
		let lastCarouselImage = document.querySelectorAll('.carousel__image')
			.length
		console.log(lastCarouselImage)

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

export function carouselNavButtonsEventListeners() {
	const navButtons = document.getElementsByClassName('carousel__indicator')
	Array.from(navButtons).forEach((button) => {
		button.addEventListener('click', () => {
			// -1 is used because ui.carouselImageContainer starts at 0 not 1
			const imageSelected = ui.carouselImageContainer[button.id - 1]
			currentImage = button.id

			removeActiveImageClass()
			removeActiveNavButtonClass()
			button.classList.add('carousel__indicator--active')

			imageSelected.classList.add('carousel__image--active')
		})
	})
}
