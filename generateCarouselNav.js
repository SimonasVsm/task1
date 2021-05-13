import {
	ui,
	removeActiveImageClass,
	removeActiveNavButtonClass,
} from './script.js'

export function generateCarouselNavButtons(data) {
	const carouselButtons = data
		.map((item, index) => {
			const buttonClass =
				index === 0
					? 'carousel__indicator carousel__indicator--active'
					: 'carousel__indicator'

			return `
      <button class="${buttonClass}" id=${item.id}></button>
      `
		})
		.join('')

	ui.carouselNavButtons.insertAdjacentHTML('beforeend', carouselButtons)
}

export function carouselNavAddEvListeners() {
	Array.from(ui.navButtons).forEach((button) => {
		button.addEventListener('click', () => {
			// -1 is used because ui.carouselImageContainer starts at 0 not 1
			const imageSelected = ui.carouselImageContainer[button.id - 1]
			ui.currentImage = button.id

			removeActiveImageClass()
			removeActiveNavButtonClass()
			button.classList.add('carousel__indicator--active')

			imageSelected.classList.add('carousel__image--active')
		})
	})
}
