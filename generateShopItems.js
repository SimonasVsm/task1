import { fetchData } from './getData.js'

function generateShopItem(item) {
	const shopList = document.getElementById('shopList')

	const shopItem = `
  <li class="items-container__item">
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

	shopList.insertAdjacentHTML('beforeend', shopItem)
}

export async function createShopItemList() {
	const response = await fetchData('shop')

	const data = await response.json()
	try {
		data.forEach((item) => {
			generateShopItem(item)
		})
	} catch (ex) {
		alert(ex)
	}
}
