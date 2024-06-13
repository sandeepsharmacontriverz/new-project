/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    images: {
        domains: ['example.com', 'localhost'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.tracebale.com',
            port: '',
            pathname: '/uploads/**',
          },
          {
            protocol: 'http',
            hostname: 'localhost:5000',
            port: '',
            pathname: '/file/**',
          },
        ],
      },
};


module.exports = nextConfig;
