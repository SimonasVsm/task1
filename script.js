const ui = {
	buttonNext: document.getElementById('right-btn'),
	buttonPrevious: document.getElementById('left-btn'),
	carouselImages: document.querySelectorAll('.carousel__image'),
	carouselIndicatorButtons: document.querySelectorAll('.carousel__indicator'),
	// get currentImageElement() {
	//   return document.querySelectorAll(
	//     '.carousel__indicator'
	//   )
	// }
}

let currentImage = 1
// const totalImages = ui.carouselImages.length

function removeActiveNavButtonClass() {
	ui.carouselIndicatorButtons.forEach((button) => {
		button.classList.remove('carousel__indicator--active')
	})
}

function removeActiveImageClass() {
	ui.carouselImages.forEach((image) => {
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

ui.buttonPrevious.addEventListener('click', () => {
	removeActiveImageClass()

	if (currentImage - 1 < 0) {
		addActiveImageClass(ui.carouselImages[ui.carouselImages.length - 1])

		currentImage = ui.carouselImages.length

		addActiveNavButtonClass(currentImage)
		currentImage--
	} else {
		addActiveImageClass(ui.carouselImages[currentImage - 1])

		addActiveNavButtonClass(currentImage)
		currentImage--
	}
})

ui.buttonNext.addEventListener('click', () => {
	removeActiveImageClass()
	const isLast = currentImage + 1 >= ui.carouselImages.length + 1

	if (isLast) {
		addActiveImageClass(ui.carouselImages[ui.carouselImages.length - 1])

		currentImage = 1
		addActiveNavButtonClass(currentImage)
	} else {
		addActiveImageClass(ui.carouselImages[currentImage - 1])

		currentImage++
		addActiveNavButtonClass(currentImage)
	}
})

ui.carouselIndicatorButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const imageSelected = ui.carouselImages[button.id - 1]

		currentImage = button.id

		removeActiveImageClass()
		removeActiveNavButtonClass()
		button.classList.add('carousel__indicator--active')

		imageSelected.classList.add('carousel__image--active')
	})
})
