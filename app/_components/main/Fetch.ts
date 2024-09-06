export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
};

export const fetchUsers = async (): Promise<User[]> => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');

	if (!response.ok) {
		throw new Error('어쩌고 에러');
	}

	const data = await response.json();
	return data;
};
