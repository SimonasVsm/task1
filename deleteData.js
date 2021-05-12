export function deleteData(path, id) {
	return fetch(`api/${path}/${id}`, {
		method: 'DELETE',
	})
}
