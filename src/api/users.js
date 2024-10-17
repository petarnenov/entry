import { request } from './request';

const baseUrl = 'https://placeholder.typicode.com';

/**
 * Fetch all users.
 * @returns {Promise<Array>} List of users.
 */
const fetchUsers = async () => {
	return request(`${baseUrl}/api/users`);
};

/**
 * Fetch a user by ID.
 * @param {string} id - User ID.
 * @returns {Promise<Object>} User data.
 */
const fetchUserById = async (id) => {
	return request(`${baseUrl}/api/users/${id}`);
};

/**
 * Create a new user.
 * @param {Object} user - User data.
 * @returns {Promise<Object>} Created user data.
 */
const createUser = async (user) => {
	return request(`${baseUrl}/api/users`, {
		method: 'POST',
		body: JSON.stringify(user),
	});
};

/**
 * Update a user by ID.
 * @param {string} id - User ID.
 * @param {Object} user - Updated user data.
 * @returns {Promise<Object>} Updated user data.
 */
const updateUser = async (id, user) => {
	return request(`${baseUrl}/api/users/${id}`, {
		method: 'PUT',
		body: JSON.stringify(user),
	});
};

/**
 * Delete a user by ID.
 * @param {string} id - User ID.
 * @returns {Promise<void>}
 */
const deleteUser = async (id) => {
	return request(`${baseUrl}/api/users/${id}`, {
		method: 'DELETE',
	});
};

/**
 * API endpoints for user management.
 * @type {Object.<string, {fn: Function, key: string[]}>}
 */
const apiEndpoints = {
	fetchUsers: {
		fn: fetchUsers,
		key: ['fetchUsers']
	},
	fetchUserById: {
		fn: fetchUserById,
		key: ['fetchUserById', ':id']
	},
	createUser: {
		fn: createUser,
		key: ['createUser']
	},
	updateUser: {
		fn: updateUser,
		key: ['updateUser', ':id']
	},
	deleteUser: {
		fn: deleteUser,
		key: ['deleteUser', ':id']
	}
};

export default apiEndpoints;
