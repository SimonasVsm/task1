export function deleteData(path, id) {
	return fetch(`/${path}/${id}`, {
		method: 'DELETE',
	})
}

export function putData(path, body) {
	return fetch(`/${path}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body,
	})
}

export function postData(path, body) {
	return fetch(`/${path}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body,
	})
}
