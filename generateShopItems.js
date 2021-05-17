import { ui } from './app.js'

export function generateShopItem(data) {
	const shopItemsList = data
		.map((item) => {
			return `
  <li id="${item.id}" class="items-container__item">
   <div class="photo">
    <img
      class="item"
      src="${item.url}"
      alt="Shop item"
      />
    </div>
  <div class="information">
    <p class="description">${item.title}</p>
    <p class="price">${item.price}</p>
  </div>
  <div class="action-buttons">
    <button class="edit-buttons" data-id="${item.id}">Edit</button>
    <button class="delete-buttons" data-id="${item.id}">Delete</button>
  </div>
</li>
  `
		})
		.join('')

	ui.shopList.insertAdjacentHTML('beforeend', shopItemsList)
}

export async function fetchAndRenderShopItems() {
	try {
		const response = await fetch('/shop')

		const data = await response.json()

		generateShopItem(data)
	} catch (ex) {
		alert(ex)
	}
}
