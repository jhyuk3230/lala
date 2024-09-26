/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const nextConfig = {
  images: {
    domains: ["image.tmdb.org", 'dev-www.lalatoon.com'], // 여기에 필요한 도메인을 추가합니다.
  },
};

const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract(nextConfig);
