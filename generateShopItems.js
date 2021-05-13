import { fetchData } from './getData.js'
import { ui } from './script.js'
debugger
function generateShopItem(data) {
	const shopItemsList = data
		.map((item) => {
			return `
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
</li>
  `
		})
		.join('')

	ui.shopList.insertAdjacentHTML('beforeend', shopItemsList)
}

export async function fetchAndRenderShopItems() {
	try {
		const response = await fetchData('shop')

		const data = await response.json()
		generateShopItem(data)
	} catch (ex) {
		alert(ex)
	}
}
