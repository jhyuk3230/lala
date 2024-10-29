import { useQuery } from '@tanstack/react-query';
import { API_URL } from '@/_components/url';

export interface DataItem {
  id: number;
  poster_path: string;
  original_title: string;
  original_language: string;
  adult: boolean;
	title: string;
}

const dataFetch = async (): Promise<DataItem[]>=>{
	const response = await fetch(API_URL);
	return response.json();
}

export function useFetch() {
	const { data: dataList = [], isLoading, error } = useQuery<DataItem[]>({
		queryKey: ['slideList'],
		queryFn: dataFetch
	});

	return { dataList, isLoading, error }
}