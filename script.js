const ui = {
	buttonNext: document.getElementById('right-btn'),
	buttonPrevious: document.getElementById('left-btn'),
	carouselImages: document.querySelectorAll('.carousel__image'),
	carouselIndicatorButtons: document.querySelectorAll('.carousel__indicator'),
	// photos uses id's from 0 and on so I need to adjust to that
	adjustedAmountOfImages:
		document.querySelectorAll('.carousel__image').length - 1,
}

let currentImage = 0
// console.log(ui.currentImageElement)
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
	console.log(item)
	item.classList.add('carousel__image--active')
}

function addActiveNavButtonClass(index) {
	removeActiveNavButtonClass()
	document.getElementById(index).classList.add('carousel__indicator--active')
}

ui.buttonPrevious.addEventListener('click', () => {
	removeActiveImageClass()

	console.log(currentImage)
	if (currentImage === -1) {
		addActiveImageClass(ui.carouselImages[ui.adjustedAmountOfImages])

		currentImage = ui.adjustedAmountOfImages
		addActiveNavButtonClass(currentImage)
		currentImage--
	} else {
		addActiveImageClass(ui.carouselImages[currentImage])

		addActiveNavButtonClass(currentImage)
		currentImage--
	}
})

ui.buttonNext.addEventListener('click', () => {
	removeActiveImageClass()
	const isLast = currentImage + 1 >= ui.carouselImages.length

	if (isLast) {
		addActiveImageClass(ui.carouselImages[ui.adjustedAmountOfImages])

		currentImage = 0
		addActiveNavButtonClass(currentImage)
	} else {
		addActiveImageClass(ui.carouselImages[currentImage])

		currentImage++
		addActiveNavButtonClass(currentImage)
	}
})

ui.carouselIndicatorButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const imageSelected = ui.carouselImages[button.id]
		currentImage = button.id

		removeActiveImageClass()
		removeActiveNavButtonClass()
		button.classList.add('carousel__indicator--active')

		imageSelected.classList.add('carousel__image--active')
	})
})
