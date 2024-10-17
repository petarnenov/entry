import { useQuery } from '@tanstack/react-query';
import apiEndpoints from '../../api/users';

/**
 * Users component for displaying a list of users
 * @returns {JSX.Element} Rendered Users component
 */
const Users = () => {
	const { data: users, error, isLoading } = useQuery({ queryKey: apiEndpoints.fetchUsers.key, queryFn: apiEndpoints.fetchUsers.fn });

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error loading users</div>;

	return (
		<div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
			<header style={{ marginBottom: '20px', textAlign: 'center' }}>
				<h1 style={{ fontSize: '24px', color: '#333' }}>My Users !!!</h1>
			</header>
			<h2 style={{ textAlign: 'center' }}>User List</h2>
			<ul style={{ listStyleType: 'none', padding: 0 }}>
				{users.map(user => (
					<li key={user.id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
						<h3 style={{ margin: '0 0 10px 0' }}>{user.name}</h3>
						<p style={{ margin: '0' }}><strong>Email:</strong> {user.email}</p>
						<p style={{ margin: '0' }}><strong>Username:</strong> {user.username}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Users;