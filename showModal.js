import { generateShopItem } from './generateShopItems.js'
import { putData, postData } from './api/apiCalls.js'
import { ui } from './script.js'

function generateModal(item, action) {
	const title =
		action === 'add'
			? `<p class="modal-title" id="exampleModalLongTitle">Add new item</p>`
			: ''

	const actionButton =
		action === 'add'
			? ` <button id="save-new-item" type="submit" class="modal-btn">Save New Item</button>`
			: ` <button id="saveEdit" type="submit" class="modal-btn">Save changes</button>`

	const modalMarkup = `
  <div class="modal" id="exampleModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
      ${title}
        <button type="button" id="close" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form class="modal-form">
        <label class="modal-form__item" for="title">Title</label>
        <input class="modal-form__item" type="text" id="title" name="title" value="${item.title}">
        <label class="modal-form__item" for="price">Price</label>
        <input class="modal-form__item" type="number" id="price" name="price" value="${item.price}">
        <label class="modal-form__item" for="url">Url</label>
        <input class="modal-form__item" type="text" id="url" name="url" value="${item.url}">
        <form/>
      </div>
      <div class="modal-footer">
        <button id="closeModal" type="button" class="modal-btn">Close</button>
        ${actionButton}
      </div>
    </div>
  </div>
</div>
  `
	ui.overlay.classList.add('overlay')
	ui.overlay.insertAdjacentHTML('afterbegin', modalMarkup)
	document.body.classList.add('fixed')

	ui.modalCloseBtn.addEventListener('click', (event) => {
		destroyModal()
	})
	ui.modalCloseSignBtn.addEventListener('click', () => {
		destroyModal()
	})
}
export function handleModal(item, action) {
	generateModal(item, action)

	if (action === 'add') {
		ui.saveNewItem.addEventListener('click', async (event) => {
			const form = document.querySelector('form')
			const data = Object.fromEntries(new FormData(form).entries())
			const createdItem = await postData('shop', data)

			const makeNewItem = await createdItem.json()

			generateShopItem([makeNewItem])
			destroyModal()
		})
	} else {
		ui.saveItemEdit.addEventListener('click', () => {
			saveItemEventListeners(item)
		})
	}
}

function saveItemEventListeners(item) {
	const form = document.querySelector('form')
	const data = Object.fromEntries(new FormData(form).entries())
	const updatedData = { ...data, id: item.id }

	putData('shop', updatedData)

	let listItems = Array.from(ui.shopItemsList.getElementsByTagName('li'))
	listItems.map((listItem, index) => {
		if (listItem.dataset.id == item.id) {
			const itemBeingChanged = ui.shopItemsList.children[index]

			itemBeingChanged.getElementsByClassName('item')[0].src =
				updatedData.url
			itemBeingChanged.getElementsByClassName(
				'description'
			)[0].innerText = updatedData.title
			itemBeingChanged.getElementsByClassName('price')[0].innerText =
				updatedData.price
		}
	})

	destroyModal()
}

function destroyModal() {
	document.body.classList.remove('fixed')
	ui.overlay.classList.remove('overlay')
	ui.overlay.removeChild(ui.modal)
}
