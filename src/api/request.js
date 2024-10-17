// Desc: API request helper function
export const request = async (url, options = {}) => {
	const headers = {
		'Content-Type': 'application/json',
		...options.headers,
	};

	return fetch(url, { ...options, headers }).then(async (response) => {
		if (response.ok) {
			return response.json();
		}

		const error = await response.json();
		throw new Error(error.message);
	});
}
