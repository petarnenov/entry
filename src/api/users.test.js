import apiEndpoints from './users';
import { request } from './request';
import { describe, it, expect, vi, afterEach } from 'vitest';

vi.mock('./request');

const baseUrl = 'https://jsonplaceholder.typicode.com';

describe('User API', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('fetchUsers should fetch all users', async () => {
		const users = [{ id: 1, name: 'John Doe' }];
		request.mockResolvedValue(users);

		const result = await apiEndpoints.fetchUsers.fn();
		expect(result).toEqual(users);
		expect(request).toHaveBeenCalledWith(`${baseUrl}/users`);
	});

	it('fetchUserById should fetch a user by ID', async () => {
		const user = { id: 1, name: 'John Doe' };
		request.mockResolvedValue(user);

		const result = await apiEndpoints.fetchUserById.fn(1);
		expect(result).toEqual(user);
		expect(request).toHaveBeenCalledWith(`${baseUrl}/users/1`);
	});

	it('createUser should create a new user', async () => {
		const newUser = { name: 'John Doe' };
		const createdUser = { id: 1, ...newUser };
		request.mockResolvedValue(createdUser);

		const result = await apiEndpoints.createUser.fn(newUser);
		expect(result).toEqual(createdUser);
		expect(request).toHaveBeenCalledWith(`${baseUrl}/users`, {
			method: 'POST',
			body: JSON.stringify(newUser),
		});
	});

	it('updateUser should update a user by ID', async () => {
		const updatedUser = { name: 'John Doe Updated' };
		const userId = 1;
		request.mockResolvedValue(updatedUser);

		const result = await apiEndpoints.updateUser.fn(userId, updatedUser);
		expect(result).toEqual(updatedUser);
		expect(request).toHaveBeenCalledWith(`${baseUrl}/users/${userId}`, {
			method: 'PUT',
			body: JSON.stringify(updatedUser),
		});
	});

	it('deleteUser should delete a user by ID', async () => {
		const userId = 1;
		request.mockResolvedValue();

		await apiEndpoints.deleteUser.fn(userId);
		expect(request).toHaveBeenCalledWith(`${baseUrl}/users/${userId}`, {
			method: 'DELETE',
		});
	});
});