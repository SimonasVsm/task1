// import { putData } from './putData.js'
import { putData } from './api/apiCalls.js'

export function generateModal(item) {
	const modalMarkup = `
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" id="close" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" value="${item.title}">
        <label for="price">Price:</label>
        <input type="number" id="price" name="price" value="${item.price}">
        <label for="url">Url:</label>
        <input type="text" id="url" name="url" value="${item.url}">
        <form/>
      </div>
      <div class="modal-footer">
        <button id="closeModal" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button id="saveEdit" type="submit" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  `

	document.body.insertAdjacentHTML('afterbegin', modalMarkup)

	// const modal = document.getElementById('exampleModal')
	// click outside should close modal
	// delete vent listeners when closing modal?
	const closeBtn = document.getElementById('closeModal')
	closeBtn.addEventListener('click', (event) => {
		destroyModal()
	})

	const closeSign = document.getElementById('close')

	closeSign.addEventListener('click', (event) => {
		destroyModal()
	})
	// add event listeners for buttons?
	const saveEdit = document.getElementById('saveEdit')
	saveEdit.addEventListener('click', (event) => {
		const form = document.querySelector('form')
		const data = Object.fromEntries(new FormData(form).entries())
		const updatedData = { ...data, id: item.id }

		putData('shop', updatedData)

		// experiment
		const shopList = document.getElementById('shopList')

		let listItems = Array.from(shopList.getElementsByTagName('li'))
		listItems.map((listItem, index) => {
			if (listItem.dataset.id == item.id) {
				const itemBeingChanged = shopList.children[index]

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
	})
}

function destroyModal() {
	const modal = document.getElementById('exampleModal')
	document.body.removeChild(modal)
}
