'use client';
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '@/_components/url';

export interface SlideItem {
  id: number;
  poster_path: string;
  original_title: string;
  original_language: string;
  adult: boolean;
	title: string;
}

const listFetch = async (): Promise<SlideItem[]>=>{
	const response = await fetch(API_URL);
	return response.json();
}

export function useFetch() {
	const { data: slideList = [], isLoading, error } = useQuery<SlideItem[]>({
		queryKey: ['slideList'],
		queryFn: listFetch
	});

	return { slideList, isLoading, error }
}