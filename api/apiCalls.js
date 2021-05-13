export function deleteData(path, id) {
	return fetch(`${path}/${id}`, {
		method: 'DELETE',
	})
}

export function fetchData(path) {
	return fetch(`/${path}`)
}

export function putData(path, item) {
	return fetch(`/${path}/${item.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			title: item.title,
			price: item.price,
			url: item.url,
		}),
	})
}

export function postData(path, item) {
	return fetch(`/${path}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			title: item.title,
			price: item.price,
			url: item.url,
		}),
	})
}
