const previousImage = document.getElementById('left-btn')
const nextImage = document.getElementById('right-btn')
const carouselImages = document.querySelectorAll('.carousel__image')
const carouselIndicatorButtons = document.querySelectorAll(
	'.carousel__indicator'
)

let currentImage = 1
const totalImages = carouselImages.length

function removeActiveNavButtonClass() {
	carouselIndicatorButtons.forEach((button) => {
		button.classList.remove('carousel__indicator--active')
	})
}

function removeActiveImageClass() {
	carouselImages.forEach((image) => {
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

previousImage.addEventListener('click', () => {
	removeActiveImageClass()

	if (currentImage - 1 < 0) {
		addActiveImageClass(carouselImages[carouselImages.length - 1])

		currentImage = carouselImages.length

		addActiveNavButtonClass(currentImage)
		currentImage--
	} else {
		addActiveImageClass(carouselImages[currentImage - 1])

		addActiveNavButtonClass(currentImage)
		currentImage--
	}
})

nextImage.addEventListener('click', () => {
	removeActiveImageClass()

	if (currentImage + 1 >= carouselImages.length + 1) {
		addActiveImageClass(carouselImages[carouselImages.length - 1])

		currentImage = 1
		addActiveNavButtonClass(currentImage)
	} else {
		addActiveImageClass(carouselImages[currentImage - 1])

		currentImage++
		addActiveNavButtonClass(currentImage)
	}
})

carouselIndicatorButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const imageSelected = carouselImages[button.id - 1]

		currentImage = button.id

		removeActiveImageClass()
		removeActiveNavButtonClass()
		button.classList.add('carousel__indicator--active')

		imageSelected.classList.add('carousel__image--active')
	})
})
