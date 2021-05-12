import { createCarousel } from './generateCarousel.js'
import { deleteData } from './api/apiCalls.js'
import { generateModal } from './showModal.js'
import { createShopItemList } from './generateShopItems.js'

const ui = {
	buttonNext: document.getElementById('right-btn'),
	buttonPrevious: document.getElementById('left-btn'),
	carouselNavButtons: document.getElementById('carouselNav'),
	shopItemsList: document.getElementById('shopList'),
	modal: document.getElementById('exampleModal'),
	carouselImageContainer: document.getElementsByClassName('carousel__image'),
	carouselIndicatorButtons: document.getElementsByClassName(
		'carousel__indicator'
	),
	editButtons: document.getElementsByClassName('edit-buttons'),
	deleteButtons: document.getElementsByClassName('delete-buttons'),
}

window.addEventListener('load', async (event) => {
	createCarousel()

	await createShopItemList()

	listenForItemDelete()
	listenForEdit()
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

function listenForItemDelete() {
	Array.from(ui.deleteButtons).forEach((button) => {
		button.addEventListener('click', (event) => {
			const itemToDeleteId = event.target.dataset.id

			if (window.confirm('Delete item?')) {
				// deleteData('shop', itemToDeleteId)
				deleteShopItemFromUi(itemToDeleteId)
			}
		})
	})
}

function deleteShopItemFromUi(itemToDeleteId) {
	let listItems = Array.from(ui.shopItemsList.getElementsByTagName('li'))
	listItems.map((item, index) => {
		if (item.dataset.id === itemToDeleteId) {
			ui.shopItemsList.removeChild(ui.shopItemsList.children[index])
		}
	})
}

function listenForEdit() {
	Array.from(ui.editButtons).forEach((button) => {
		button.addEventListener('click', async (event) => {
			const modal = document.getElementById('exampleModal')

			if (modal) document.body.removeChild(modal)

			const itemToEditId = event.target.dataset.id
			const data = await fetch(`/api/shop/${itemToEditId}`)
			const itemData = await data.json()
			generateModal(itemData)
		})
	})
}
