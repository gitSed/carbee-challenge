/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          'https://backend.billowing-truth-38ad.workers.dev/api/:path*',
      },
    ];
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
