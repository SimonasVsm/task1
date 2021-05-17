import { createCarousel } from './generateCarousel.js'
import { deleteData } from './api/apiCalls.js'
import { handleModal } from './showModal.js'
import { fetchAndRenderShopItems } from './generateShopItems.js'

export const ui = {
	currentImage: 1,
	buttonNext: document.getElementById('right-btn'),
	buttonPrevious: document.getElementById('left-btn'),
	carouselNavButtons: document.getElementById('carouselNav'),
	shopItemsList: document.getElementById('shopList'),
	overlay: document.getElementById('overlay'),
	addItem: document.getElementById('add-item'),

	shopList: document.getElementById('shopList'),
	containerFroCarouselImages: document.getElementById('carousel-images'),
	carouselImageContainer: document.getElementsByClassName('carousel__image'),
	carouselIndicatorButtons: document.getElementsByClassName(
		'carousel__indicator'
	),
	editButtons: document.getElementsByClassName('edit-buttons'),
	deleteButtons: document.getElementsByClassName('delete-buttons'),

	get modal() {
		return document.getElementById('exampleModal')
	},

	get modalCloseSignBtn() {
		return document.getElementById('close')
	},
	get modalCloseBtn() {
		return document.getElementById('closeModal')
	},
	get saveNewItem() {
		return document.getElementById('save-new-item')
	},
	get saveItemEdit() {
		return document.getElementById('saveEdit')
	},
	get navButtons() {
		return document.getElementsByClassName('carousel__indicator')
	},
}

window.addEventListener('load', async (event) => {
	createCarousel()

	await fetchAndRenderShopItems()

	Array.from(ui.deleteButtons).forEach((button) => {
		addDeleteListener(button, button.dataset.id)
	})

	Array.from(ui.editButtons).forEach((button) => {
		addEditListener(button, button.dataset.id)
	})
})

// let currentImage = 1

export function removeActiveNavButtonClass() {
	Array.from(ui.carouselIndicatorButtons).forEach((button) => {
		button.classList.remove('carousel__indicator--active')
	})
}

export function removeActiveImageClass() {
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

ui.addItem.addEventListener('click', () => {
	const emptyItem = {
		title: '',
		price: '',
		url: '',
	}
	handleModal(emptyItem, 'add')
})

ui.buttonPrevious.addEventListener('click', () => {
	removeActiveImageClass()

	const isFirst = ui.currentImage - 1 < 0

	if (isFirst) {
		let lastCarouselImage =
			document.querySelectorAll('.carousel__image').length

		// -1 is used because ui.carouselImageContainer starts at 0 not 1
		addActiveImageClass(ui.carouselImageContainer[lastCarouselImage - 1])

		ui.currentImage = lastCarouselImage

		addActiveNavButtonClass(ui.currentImage)
		ui.currentImage--
	} else {
		// -1 is used because ui.carouselImageContainer starts at 0 not 1
		addActiveImageClass(ui.carouselImageContainer[ui.currentImage - 1])

		addActiveNavButtonClass(ui.currentImage)
		ui.currentImage--
	}
})

ui.buttonNext.addEventListener('click', () => {
	removeActiveImageClass()
	const isLast = ui.currentImage + 1 > ui.carouselImageContainer.length

	if (isLast) {
		addActiveImageClass(ui.carouselImageContainer[0])

		ui.currentImage = 1
		addActiveNavButtonClass(ui.currentImage)
	} else {
		addActiveImageClass(ui.carouselImageContainer[ui.currentImage])

		ui.currentImage++
		addActiveNavButtonClass(ui.currentImage)
	}
})

function deleteShopItemFromUi(itemToDeleteId) {
	const elementToDelete = document.getElementById(itemToDeleteId)
	ui.shopItemsList.removeChild(elementToDelete)
}

export function addDeleteListener(item, id) {
	item.addEventListener('click', () => {
		if (window.confirm('Delete item?')) {
			deleteData('shop', id)
			deleteShopItemFromUi(id)
		}
	})
}

export function addEditListener(item, id) {
	item.addEventListener('click', async () => {
		if (ui.modal) document.body.removeChild(ui.modal)

		const data = await fetch(`/shop/${id}`)
		const itemData = await data.json()
		handleModal(itemData, 'edit')
	})
}