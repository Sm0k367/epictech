/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
images: {
// Allow images from HuggingFace CDN or other needed hosts if you add remote images
remotePatterns: [
{
protocol: 'https',
hostname: '**.hf.space',
},
],
},
};

module.exports = nextConfig;
