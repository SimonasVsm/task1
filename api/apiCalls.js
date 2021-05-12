export function deleteData(path, id) {
	return fetch(`api/${path}/${id}`, {
		method: 'DELETE',
	})
}

export function fetchData(path) {
	return fetch(`/api/${path}`)
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
