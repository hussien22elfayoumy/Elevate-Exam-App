import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'exam.elevateegy.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/dashboard',
        permanent: true,
      },
      {
        source: '/ar',
        destination: '/dashboard',
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
