import { fetchUsers, fetchUserById, createUser, updateUser, deleteUser } from './users';
import { request } from './request';

jest.mock('./request');

describe('User API', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test('fetchUsers should fetch all users', async () => {
		const users = [{ id: 1, name: 'John Doe' }];
		request.mockResolvedValue(users);

		const result = await fetchUsers();
		expect(result).toEqual(users);
		expect(request).toHaveBeenCalledWith('/api/users');
	});

	test('fetchUserById should fetch a user by ID', async () => {
		const user = { id: 1, name: 'John Doe' };
		request.mockResolvedValue(user);

		const result = await fetchUserById(1);
		expect(result).toEqual(user);
		expect(request).toHaveBeenCalledWith('/api/users/1');
	});

	test('createUser should create a new user', async () => {
		const newUser = { name: 'John Doe' };
		const createdUser = { id: 1, ...newUser };
		request.mockResolvedValue(createdUser);

		const result = await createUser(newUser);
		expect(result).toEqual(createdUser);
		expect(request).toHaveBeenCalledWith('/api/users', {
			method: 'POST',
			body: JSON.stringify(newUser),
		});
	});

	test('updateUser should update a user by ID', async () => {
		const updatedUser = { name: 'John Doe Updated' };
		const userId = 1;
		request.mockResolvedValue(updatedUser);

		const result = await updateUser(userId, updatedUser);
		expect(result).toEqual(updatedUser);
		expect(request).toHaveBeenCalledWith(`/api/users/${userId}`, {
			method: 'PUT',
			body: JSON.stringify(updatedUser),
		});
	});

	test('deleteUser should delete a user by ID', async () => {
		const userId = 1;
		request.mockResolvedValue();

		await deleteUser(userId);
		expect(request).toHaveBeenCalledWith(`/api/users/${userId}`, {
			method: 'DELETE',
		});
	});
});