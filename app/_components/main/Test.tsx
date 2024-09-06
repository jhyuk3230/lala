'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers, User } from './Fetch';

export default function Test(test:any) {
  const { data: users, isLoading, isError } = useQuery<User[]>({
  	queryKey: ["users", test.id],
  	queryFn: fetchUsers,
		staleTime: 10000,
  });
  if (isLoading) return <p>로딩</p>
  if (isError) return <p>에러</p>

	return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>
          {user.name} / {user.username}
        </li>
      ))}
    </ul>
  );
}