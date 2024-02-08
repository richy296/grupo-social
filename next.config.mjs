/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        serverActions: true
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'images.unsplash.com'
        },
        {
            protocol: 'https',
            hostname: 'pokeapi.co/api/v2'
        },{
            protocol: 'https',
            hostname: 'raw.githubusercontent.com'
        }]
    }
};

export default nextConfig;
